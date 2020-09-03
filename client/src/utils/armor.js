import {
  ARMOR_TYPE_LEATHER,
  ARMOR_TYPE_CHAINMAIL,
  ARMOR_TYPE_PLATE,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
} from '../game/armor'

export const quality = [
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
]

export const condition = [CONDITION_WORN, CONDITION_FAIR, CONDITION_GOOD]

export const armorTypes = [
  ARMOR_TYPE_LEATHER,
  ARMOR_TYPE_CHAINMAIL,
  ARMOR_TYPE_PLATE,
]

export function getArmorName(key) {
  switch (key) {
    case ARMOR_TYPE_LEATHER:
      return 'Leather Armor'
    case ARMOR_TYPE_CHAINMAIL:
      return 'Chainmail Armor'
    case ARMOR_TYPE_PLATE:
      return 'Plate Armor'
    case QUALITY_LOW:
      return 'Low Quality'
    case QUALITY_NORMAL:
      return 'Normal Quality'
    case QUALITY_HIGH:
      return 'High Quality'
    case QUALITY_LEGENDARY:
      return 'Legendary Quality'
    case CONDITION_WORN:
      return 'Worn Condition'
    case CONDITION_FAIR:
      return 'Fair Condition'
    case CONDITION_GOOD:
      return 'Good Condition'
  }
}
