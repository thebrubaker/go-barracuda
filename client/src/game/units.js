import { randomFighterWeapon, randomGoblinWeapon } from './weapons'
import { getRandomItem, getRandomInt } from './utils'
import { generateGoblinName, generateHumanName } from './names'
import {
  ARMOR_TYPE_LEATHER,
  ARMOR_TYPE_CHAINMAIL,
  ARMOR_TYPE_PLATE,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
  SHIELD,
} from './armor'

export const HEAD = 'HEAD'
export const BODY = 'BODY'
export const LEFT_ARM = 'LEFT_ARM'
export const RIGHT_ARM = 'RIGHT_ARM'
export const LEFT_LEG = 'LEFT_LEG'
export const RIGHT_LEG = 'RIGHT_LEG'

export const HUMAN_BRIGAND = Symbol()
export const HUMAN_SHOOTER = Symbol()
export const HUMAN_STEAMER = Symbol()
export const HUMAN_WOODCUTTER = Symbol()
export const HUMAN_ROBBER = Symbol()

export const GOBLIN_MELEE = Symbol()
export const GOBLIN_LEADER = Symbol()
export const GOBLIN_RANGED = Symbol()

export function generateGoblin() {
  return {
    name: generateGoblinName(),
    type: getRandomItem([GOBLIN_MELEE, GOBLIN_LEADER, GOBLIN_RANGED]),
    equipment: {
      head: randomGoblinArmor(),
      body: randomGoblinArmor(),
      weapon: randomGoblinWeapon(),
      shield: null,
    },
    bodyParts: newBodyParts(),
    exhaustion: 0,
    maxExhaustion: 10,
    speed: getRandomInt(1) + 0,
    actions: getRandomInt(1) + 1,
    morale: 0,
    alive: true,
  }
}

export function generateFighter() {
  return {
    name: generateHumanName(),
    type: getRandomItem([
      HUMAN_BRIGAND,
      HUMAN_SHOOTER,
      HUMAN_STEAMER,
      HUMAN_WOODCUTTER,
      HUMAN_ROBBER,
    ]),
    equipment: {
      head: randomFighterArmor(),
      body: randomFighterArmor(),
      weapon: randomFighterWeapon(),
      shield: getRandomItem([null, randomShield()]),
    },
    bodyParts: newBodyParts(),
    exhaustion: 0,
    maxExhaustion: getRandomInt(5) + 15,
    speed: getRandomInt(3) + 3,
    actions: getRandomInt(3) + 3,
    morale: getRandomInt(2) + 1,
    alive: true,
  }
}

function randomShield() {
  return {
    type: SHIELD,
    name: getRandomItem([
      'Small Buckler',
      'Large Buckler',
      'Tower Shield',
      'War Shield',
      'Kite Shield',
      'Aspis',
      'Studded Shield',
      'Heater',
    ]),
    condition: getRandomItem([
      CONDITION_WORN,
      CONDITION_FAIR,
      CONDITION_FAIR,
      CONDITION_FAIR,
      CONDITION_GOOD,
    ]),
    quality: getRandomItem([
      QUALITY_LOW,
      QUALITY_NORMAL,
      QUALITY_NORMAL,
      QUALITY_NORMAL,
      QUALITY_HIGH,
    ]),
  }
}

function randomFighterArmor() {
  return getRandomItem([
    {
      type: getRandomItem([
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_LEATHER,
        ARMOR_TYPE_CHAINMAIL,
        ARMOR_TYPE_CHAINMAIL,
        ARMOR_TYPE_CHAINMAIL,
        ARMOR_TYPE_CHAINMAIL,
        ARMOR_TYPE_PLATE,
      ]),
      condition: getRandomItem([
        CONDITION_GOOD,
        CONDITION_FAIR,
        CONDITION_FAIR,
      ]),
      quality: getRandomItem([QUALITY_LOW, QUALITY_NORMAL, QUALITY_HIGH]),
    },
  ])
}

function randomGoblinArmor() {
  return getRandomItem([
    null,
    null,
    null,
    null,
    {
      type: ARMOR_TYPE_LEATHER,
      condition: getRandomItem([
        CONDITION_WORN,
        CONDITION_WORN,
        CONDITION_WORN,
        CONDITION_FAIR,
      ]),
      quality: getRandomItem([
        QUALITY_LOW,
        QUALITY_LOW,
        QUALITY_LOW,
        QUALITY_NORMAL,
      ]),
    },
  ])
}

function newBodyParts() {
  return [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]
}
