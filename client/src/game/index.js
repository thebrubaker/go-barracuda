import Vue from 'vue'
import { getRandomItem, getRandomInt } from './utils'
import {
  generateGoblin,
  generateFighter,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
  HEAD,
  BODY,
} from './units'
import {
  BLOCK,
  DODGE,
  PARRY,
  canDefendAttack,
  defendAttack,
  getExhaustionCost,
  getBodyPartToHit,
} from './combat'
import { rollArmorConditionLoss } from './armor'

export const gameState = createGameState()

function createGameState() {
  const gameState = {
    turn: 1,
    step: 1,
    logs: [],
    currentUnit: null,
    currentTarget: null,
    units: {},
    initiativeOrder: [],
    parties: {},
  }

  let fighterCount = getRandomInt(3) + 10
  let enemyCount = getRandomInt(4) + 15

  // Generate Some Fighters
  for (let index = 0; index < fighterCount; index++) {
    gameState.units[index] = {
      ...generateFighter(),
      key: index,
      initiative: [],
      team: 1,
      action: getRandomItem([
        'Resting',
        'Running a training exercise',
        'Gathering equipment',
        'Gathering supplies',
        'Sparring',
        'Patroling',
      ]),
    }
  }

  // Generate Some Enemies
  for (let index = 0; index < enemyCount; index++) {
    gameState.units[fighterCount + index] = {
      ...generateGoblin(),
      key: fighterCount + index,
      initiative: [],
      team: 2,
    }
  }

  // Generate the order of actions
  gameState.initiativeOrder = generateInitiativeOrder(gameState.units)

  // Generate a party
  gameState.parties[1] = {
    units: [
      ...Object.values(gameState.units)
        .filter(unit => unit.team === 1)
        .map(unit => unit.key),
    ],
  }

  return Vue.observable(gameState)
}

export function nextTick() {
  // Set up next in initiative, and pull out an attacker and defender
  nextInitiative((attacker, defender) => {
    console.log({ attacker, defender })
    if (!defender) {
      console.log('No Defender.')
      attacker.exhaustion = Math.max(0, attacker.exhaustion - 2)
      return
    }
    // Determine if attacker can attack
    if (
      !attacker.bodyParts.includes(RIGHT_ARM) &&
      !attacker.bodyParts.includes(LEFT_ARM)
    ) {
      console.log('Attacker has no arms.')
      attacker.exhaustion = Math.max(0, attacker.exhaustion - 2)
      return
    }
    // Attack
    const attackType = getAttackType(attacker)
    const swingType = getSwingType(attacker)
    const damageType = attacker.equipment.weapon.type.damageTypes[swingType]
    console.log(`Making a ${attackType} with a ${swingType} / ${damageType}`)
    let attackCost = getExhaustionCost(attackType)
    // Too Tired
    if (attacker.exhaustion + attackCost > attacker.maxExhaustion) {
      console.log('Attacker Too Tired.')
      // Time to Rest
      attacker.exhaustion = Math.max(
        0,
        attacker.exhaustion - getRandomInt(2) - 2
      )
      return
    }
    // Perform Attack
    attacker.exhaustion = Math.min(
      attacker.maxExhaustion,
      attacker.exhaustion + attackCost
    )

    // Defense
    const defenseType = getDefenseType(defender)
    let defendCost = getExhaustionCost(defenseType)
    if (
      // Not Exhausted
      defender.exhaustion + defendCost <= defender.maxExhaustion &&
      // Can Defend Attack
      canDefendAttack(attackType, defenseType) &&
      // Successfully Defend
      defendAttack(attacker.morale, defender.morale)
    ) {
      console.log('Defender stops attack.')
      // Attacker is like, awe man...
      attacker.morale--
      // Defender is a bit more tired
      defender.exhaustion = Math.min(
        defender.maxExhaustion,
        defender.exhaustion + defendCost
      )
      return createDefendAttackLog({
        attacker,
        defender,
        attackType,
        swingType,
        damageType,
        defenseType,
      })
    }

    // attacker strikes a body part
    const bodyPart = getBodyPartToHit(defender.bodyParts)
    console.log(`Attacker targets ${bodyPart}`)
    // is it armored?
    const armor = getArmorForBodyPart(defender, bodyPart)
    if (armor) {
      console.log('Defender Has Armor')
    }
    // does that armor block the attack?
    const blocked = armor ? armorBlocksAttack(armor, damageType) : false

    // Armor takes some damage from the attack
    if (blocked) {
      console.log('Armor blocked the attack')
      createArmorDefenseLog({
        attacker,
        defender,
        armor,
        attackType,
        swingType,
        damageType,
        defenseType,
        bodyPart,
      })
      if (rollArmorConditionLoss(armor.quality, bodyPart)) {
        console.log('Armor was damaged from the attack')
        armor.condition--
        createArmorConditionLog({
          attacker,
          defender,
          armor,
          attackType,
          swingType,
          damageType,
          defenseType,
          bodyPart,
        })
      }
      return
    }

    // Weapon hits the body part
    createWeaponAttackLog({
      attacker,
      defender,
      armor,
      attackType,
      swingType,
      damageType,
      defenseType,
      bodyPart,
    })

    // lose body part
    defender.bodyParts = defender.bodyParts.filter(part => part !== bodyPart)

    // defender is exhausted and demoralized from losing a body part
    if ([RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG].includes(bodyPart)) {
      console.log('Defender loses body part.')
      defender.morale = 0
      defender.exhaustion = defender.maxExhaustion
    }

    if ([HEAD, BODY].includes(bodyPart)) {
      console.log('Defender dies.')
      defender.alive = false
      createUnitDiesLog({
        attacker,
        defender,
        armor,
        attackType,
        swingType,
        damageType,
        defenseType,
        bodyPart,
      })
    }
  })
}

function armorBlocksAttack(armor, damageType) {
  if (armor.condition <= 0) {
    return false
  }

  return armor.type.protection.includes(damageType)
}

function getArmorForBodyPart({ equipment }, bodyPart) {
  return bodyPart === HEAD ? equipment.head : equipment.body
}

function getAttackType(attacker) {
  return getRandomItem(attacker.equipment.weapon.type.attackTypes)
}

function getSwingType(attacker) {
  return getRandomItem(Object.keys(attacker.equipment.weapon.type.damageTypes))
}

function getDefenseType({ bodyParts, equipment }) {
  const defenseTypes = []
  if (bodyParts.includes(RIGHT_LEG) && bodyParts.includes(LEFT_LEG)) {
    defenseTypes.push(DODGE)
  }
  if (bodyParts.includes(RIGHT_ARM) || bodyParts.includes(LEFT_ARM)) {
    defenseTypes.push(PARRY)
  }
  if (
    bodyParts.includes(RIGHT_ARM) &&
    bodyParts.includes(LEFT_ARM) &&
    equipment.shield
  ) {
    defenseTypes.push(BLOCK)
    defenseTypes.push(BLOCK)
    defenseTypes.push(BLOCK)
  }
  return getRandomItem(defenseTypes)
}

function nextInitiative(callback) {
  let { initiativeOrder, units } = gameState
  // grab next unit
  gameState.currentUnit = initiativeOrder[0]
  gameState.currentTarget = determineTarget(
    units[gameState.currentUnit],
    Object.values(gameState.units)
  )
  callback(units[gameState.currentUnit], units[gameState.currentTarget])
  // move unit to back of initiative
  initiativeOrder.push(initiativeOrder[0])
  initiativeOrder.shift()
  // Remove anyone who died
  gameState.initiativeOrder = initiativeOrder.filter(key => {
    return gameState.units[key].alive
  })
  gameState.step++
}

function createArmorDefenseLog({
  attacker,
  defender,
  armor,
  attackType,
  swingType,
  damageType,
  defenseType,
  bodyPart,
}) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'ArmorDefense',
    attacker,
    defender,
    armor,
    attackType,
    swingType,
    damageType,
    defenseType,
    bodyPart,
  })
}
function createArmorConditionLog(context) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'ArmorCondition',
    ...context,
  })
}

function createDefendAttackLog(context) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'DefendAttack',
    ...context,
  })
}

function createUnitDiesLog(context) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'UnitDies',
    ...context,
  })
}

function createWeaponAttackLog(context) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'WeaponAttack',
    ...context,
  })
}

function generateInitiativeOrder(units) {
  let order = []
  Object.values(units).forEach(unit => {
    for (let index = 0; index < unit.actions; index++) {
      order.push({
        key: unit.key,
        initiative: getRandomInt(100) + unit.speed,
      })
    }
  })
  return order
    .sort((a, b) => {
      if (a.initiative < b.initiative) {
        return 1
      }
      if (a.initiative > b.initiative) {
        return -1
      }
      return 0
    })
    .map(({ key }) => key)
}

function determineTarget(unit, targets) {
  if (unit.team === 1) {
    targets = targets.filter(target => target.team === 2 && target.alive)
  }
  if (unit.team === 2) {
    targets = targets.filter(target => target.team === 1 && target.alive)
  }
  if (!targets.length) {
    return null
  }
  return targets[getRandomInt(targets.length - 1)].key
}
