import { getRandomInt } from './utils'
import { SLASH, PIERCE, BLUNT } from './weapons'

export const ARMOR_LEATHER = 'ARMOR_LEATHER'
export const ARMOR_CHAINMAIL = 'ARMOR_CHAINMAIL'
export const ARMOR_PLATE = 'ARMOR_PLATE'

export const SHIELD = 'SHIELD'
export const BUCKLER = 'BUCKLER'
export const KITE = 'KITE'
export const TOWER = 'TOWER'

export const QUALITY_LOW = 'QUALITY_LOW'
export const QUALITY_NORMAL = 'QUALITY_NORMAL'
export const QUALITY_HIGH = 'QUALITY_HIGH'
export const QUALITY_LEGENDARY = 'QUALITY_LEGENDARY'

export const CONDITION_WORN = 0
export const CONDITION_FAIR = 1
export const CONDITION_GOOD = 2

export const ARMOR_TYPE_LEATHER = {
  name: ARMOR_LEATHER,
  protection: [SLASH],
}
export const ARMOR_TYPE_CHAINMAIL = {
  name: ARMOR_CHAINMAIL,
  protection: [SLASH, PIERCE],
}
export const ARMOR_TYPE_PLATE = {
  name: ARMOR_PLATE,
  protection: [SLASH, PIERCE, BLUNT],
}

export function rollArmorConditionLoss(armor, helmet = false) {
  if (helmet) {
    return rollHelmetConditionLoss(armor)
  }
  switch (armor.quality) {
    case QUALITY_LOW:
      return getRandomInt(3) <= 1
    case QUALITY_NORMAL:
      return getRandomInt(10) <= 1
    case QUALITY_HIGH:
      return getRandomInt(30) <= 1
    case QUALITY_LEGENDARY:
      return getRandomInt(100) <= 1
  }
}

export function rollHelmetConditionLoss(armor) {
  switch (armor.quality) {
    case QUALITY_LOW:
      return getRandomInt(2) <= 1
    case QUALITY_NORMAL:
      return getRandomInt(5) <= 1
    case QUALITY_HIGH:
      return getRandomInt(10) <= 1
    case QUALITY_LEGENDARY:
      return getRandomInt(20) <= 1
  }
}
