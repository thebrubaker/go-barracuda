import { getRandomInt, getRandomItem } from './utils'

import { BODY, HEAD, RIGHT_ARM, RIGHT_LEG, LEFT_ARM, LEFT_LEG } from './units'

export const NORMAL_ATTACK = 'NORMAL_ATTACK'
export const STRONG_ATTACK = 'STRONG_ATTACK'
export const WILD_ATTACK = 'WILD_ATTACK'
export const QUICK_ATTACK = 'QUICK_ATTACK'
export const DEFENSIVE_STANCE = 'DEFENSIVE_STANCE'
export const RECOVER = 'RECOVER'
export const RALLY = 'RALLY'

export const BLOCK = 'BLOCK'
export const DODGE = 'DODGE'
export const PARRY = 'PARRY'
export const COUNTER = 'COUNTER'

export const STAMINA_FULL = 'STAMINA_FULL'
export const STAMINA_HIGH = 'STAMINA_HIGH'
export const STAMINA_HALF = 'STAMINA_HALF'
export const STAMINA_LOW = 'STAMINA_LOW'
export const STAMINA_EMPTY = 'STAMINA_EMPTY'

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
  return firstRoll > secondRoll ? firstRoll : secondRoll
}

export function getBodyPartToHit(availableBodyParts, targetBodyPart = null) {
  // The odds of hitting a body part
  // If a limb has been lost, the BODY is replaced as the default location to hit
  const chanceToHit = [
    BODY,
    BODY,
    BODY,
    BODY,
    BODY,
    BODY,
    HEAD,
    HEAD,
    RIGHT_ARM,
    RIGHT_ARM,
    RIGHT_ARM,
    RIGHT_LEG,
    RIGHT_LEG,
    RIGHT_LEG,
    LEFT_ARM,
    LEFT_ARM,
    LEFT_ARM,
    LEFT_LEG,
    LEFT_LEG,
    LEFT_LEG,
  ].map(part => (availableBodyParts.includes(part) ? part : BODY))

  // Increase the odds of hitting the target body part
  if (targetBodyPart && availableBodyParts.includes(targetBodyPart)) {
    chanceToHit.push(targetBodyPart)
    chanceToHit.push(targetBodyPart)
  }

  return getRandomItem(chanceToHit)
}
