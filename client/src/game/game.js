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
  }

  let fighterCount = getRandomInt(3) + 3
  let enemyCount = getRandomInt(4) + 6

  // Generate Some Fighters
  for (let index = 0; index < fighterCount; index++) {
    gameState.units[index] = {
      ...generateFighter(),
      key: index,
      initiative: [],
      team: 1,
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

  return Vue.observable(gameState)
}

export function nextTick() {
  // Set up next in initiative, and pull out an attacker and defender
  nextInitiative((attacker, defender) => {
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
    let attackCost = getExhaustionCost(attackType)
    if (attacker.exhaustion + attackCost > attacker.maxExhaustion) {
      console.log('Attacker Too Tired.')
      // Too Tired, Must Rest
      attacker.exhaustion = Math.max(
        0,
        attacker.exhaustion - getRandomInt(2) - 2
      )
      return
    }
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
      // Can Defend
      canDefendAttack(attackType, defenseType) &&
      // Does Defend
      defendAttack(attacker.morale, defender.morale)
    ) {
      console.log('Defender stops attack.')
      attacker.morale--
      defender.exhaustion = Math.min(
        defender.maxExhaustion,
        defender.exhaustion + defendCost
      )
      return createDefendAttackLog({
        attacker,
        defender,
        attackType,
        defenseType,
      })
    }

    // random body part
    const bodyPart = getBodyPartToHit(defender.bodyParts)

    // create log

    createWeaponAttackLog({
      attacker,
      defender,
      attackType,
      defenseType,
      bodyPart,
    })

    // lose body part
    defender.bodyParts = defender.bodyParts.filter(part => part !== bodyPart)

    // create effect
    if ([RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG].includes(bodyPart)) {
      console.log('Defender loses body part.')
      defender.morale = 0
      defender.exhaustion = defender.maxExhaustion
      createDestroyedBodyPartLog({
        defender,
        bodyPart,
      })
    }

    if ([HEAD, BODY].includes(bodyPart)) {
      console.log('Defender dies.')
      defender.alive = false
      createUnitDiesLog({
        attacker,
        defender,
      })
    }
  })
}

function getAttackType(attacker) {
  return getRandomItem(attacker.equipment.weapon.type.attackTypes)
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

function createDefendAttackLog({
  attacker,
  defender,
  attackType,
  defenseType,
}) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'DefendAttack',
    attacker,
    defender,
    attackType,
    defenseType,
  })
}

function createUnitDiesLog({ attacker, defender }) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'UnitDies',
    attacker,
    defender,
  })
}

function createWeaponAttackLog({
  attacker,
  defender,
  attackType,
  defenseType,
  bodyPart,
}) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'WeaponAttack',
    attacker,
    defender,
    attackType,
    defenseType,
    bodyPart,
  })
}

function createDestroyedBodyPartLog({ defender, bodyPart }) {
  gameState.logs.push({
    turn: gameState.turn + '.' + gameState.step,
    type: 'DestroyedBodyPart',
    defender,
    bodyPart,
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
