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
  nextInitiative((attacker, defender) => {
    // Determine if attacker can attack
    if (
      !attacker.bodyParts.includes(RIGHT_ARM) &&
      !attacker.bodyParts.includes(LEFT_ARM)
    ) {
      attacker.exhaustion -= 2
      return
    }
    // Select Attack
    const weaponType = attacker.equipment.weapon.type
    const attackType = getRandomItem(weaponType.attackTypes)
    const defenseType = defender.equipment.shield
      ? BLOCK
      : getRandomItem([DODGE, PARRY])

    // Perform Attack
    let attackCost = getExhaustionCost(attackType)
    if (attacker.exhaustion + attackCost > 10) {
      attacker.exhaustion -= 2
      return
    }
    attacker.exhaustion += attackCost

    // Perform Defense
    let defendCost = getExhaustionCost(attackType)
    if (
      defender.exhaustion + defendCost <= 10 &&
      canDefendAttack(attackType, defenseType) &&
      defendAttack(attacker.morale, defender.morale)
    ) {
      attacker.morale--
      defender.exhaustion += defendCost
      return createDefendAttackLog({
        attacker,
        defender,
        attackType,
        defenseType,
      })
    }

    // random body part
    const bodyPart = getRandomItem(defender.bodyParts)

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
      defender.morale = 0
      defender.exhaustion = 10
      createDestroyedBodyPartLog({
        defender,
        bodyPart,
      })
    }

    if ([HEAD, BODY].includes(bodyPart)) {
      defender.alive = false
    }
  })
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
  return targets[getRandomInt(targets.length - 1)].key
}
