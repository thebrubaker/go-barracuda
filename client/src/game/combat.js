import { getRandomInt } from './utils'

export const NORMAL_ATTACK = Symbol()
export const STRONG_ATTACK = Symbol()
export const WILD_ATTACK = Symbol()
export const QUICK_ATTACK = Symbol()

export const BLOCK = Symbol()
export const DODGE = Symbol()
export const PARRY = Symbol()
export const COUNTER = Symbol()

export function defendAttack(attackerMorale, defenderMorale) {
  return rollTheDice(defenderMorale) >= rollTheDice(attackerMorale)
}

export function canDefendAttack(attackType, defenseType) {
  switch (attackType) {
    case NORMAL_ATTACK:
      return [BLOCK, DODGE, PARRY].includes(defenseType)
    case STRONG_ATTACK:
      return [DODGE].includes(defenseType)
    case WILD_ATTACK:
      return [DODGE, BLOCK].includes(defenseType)
    case QUICK_ATTACK:
      return [PARRY, BLOCK].includes(defenseType)
  }
}

export function getExhaustionCost(type) {
  switch (type) {
    case QUICK_ATTACK:
    case PARRY:
      return 1
    case NORMAL_ATTACK:
    case DODGE:
    case BLOCK:
      return 2
    case STRONG_ATTACK:
    case WILD_ATTACK:
      return 3
  }
}

function rollTheDice(morale) {
  if (morale <= 0) {
    return getRandomInt(20)
  }
  let firstRoll = getRandomInt(20)
  let secondRoll = rollTheDice(morale - 1)
  console.log({ firstRoll, secondRoll })
  return firstRoll > secondRoll ? firstRoll : secondRoll
}
