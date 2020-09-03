import {
  ARMOR_LEATHER,
  ARMOR_CHAINMAIL,
  ARMOR_PLATE,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
  BUCKLER,
  KITE,
  TOWER,
} from '../game/armor'
import {
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
} from '../game/resources'
import {
  MATERIAL_WOOD,
  MATERIAL_STONE,
  MATERIAL_IRON,
  MATERIAL_STEEL,
  MATERIAL_GLASS,
  MATERIAL_CLAY,
} from '../game/materials'
import {
  WAR_HAMMER,
  GREAT_AXE,
  SPEAR,
  MACE,
  SWORD,
  DAGGER,
} from '../game/weapons'
import {
  NORMAL_ATTACK,
  STRONG_ATTACK,
  WILD_ATTACK,
  QUICK_ATTACK,
  DEFENSIVE_STANCE,
  RECOVER,
  RALLY,
  STAMINA_FULL,
  STAMINA_HIGH,
  STAMINA_HALF,
  STAMINA_LOW,
  STAMINA_EMPTY,
} from '../game/combat'

export {
  ARMOR_LEATHER,
  ARMOR_CHAINMAIL,
  ARMOR_PLATE,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
  BUCKLER,
  KITE,
  TOWER,
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
  MATERIAL_WOOD,
  MATERIAL_STONE,
  MATERIAL_IRON,
  MATERIAL_STEEL,
  MATERIAL_GLASS,
  MATERIAL_CLAY,
  WAR_HAMMER,
  GREAT_AXE,
  SPEAR,
  MACE,
  SWORD,
  DAGGER,
  NORMAL_ATTACK,
  STRONG_ATTACK,
  WILD_ATTACK,
  QUICK_ATTACK,
  DEFENSIVE_STANCE,
  RECOVER,
  RALLY,
  STAMINA_FULL,
  STAMINA_HIGH,
  STAMINA_HALF,
  STAMINA_LOW,
  STAMINA_EMPTY,
}

export const staminaTypes = [
  STAMINA_FULL,
  STAMINA_HIGH,
  STAMINA_HALF,
  STAMINA_LOW,
  STAMINA_EMPTY,
]

export const tacticTypes = [
  NORMAL_ATTACK,
  STRONG_ATTACK,
  WILD_ATTACK,
  QUICK_ATTACK,
  DEFENSIVE_STANCE,
  RECOVER,
  RALLY,
]

export const qualityTypes = [
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
]

export const conditionTypes = [CONDITION_WORN, CONDITION_FAIR, CONDITION_GOOD]

export const armorTypes = [ARMOR_LEATHER, ARMOR_CHAINMAIL, ARMOR_PLATE]

export const shieldTypes = [BUCKLER, KITE, TOWER]

export const weaponTypes = [WAR_HAMMER, GREAT_AXE, SPEAR, MACE, SWORD, DAGGER]

export const materialTypes = [
  MATERIAL_WOOD,
  MATERIAL_STONE,
  MATERIAL_IRON,
  MATERIAL_STEEL,
  MATERIAL_GLASS,
  MATERIAL_CLAY,
]

export const resourceTypes = [
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
]

export function getConstantName(constant) {
  switch (constant) {
    case MATERIAL_WOOD:
      return 'Wood'
    case MATERIAL_STONE:
      return 'Stone'
    case MATERIAL_IRON:
      return 'Iron'
    case MATERIAL_STEEL:
      return 'Steel'
    case MATERIAL_GLASS:
      return 'Glass'
    case MATERIAL_CLAY:
      return 'Clay'
    case ARMOR_LEATHER:
      return 'Leather Armor'
    case ARMOR_CHAINMAIL:
      return 'Chainmail Armor'
    case ARMOR_PLATE:
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
    case RESOURCE_FOOD:
      return 'Food'
    case RESOURCE_WATER:
      return 'Water'
    case RESOURCE_TENT:
      return 'Tents'
    case RESOURCE_WAGON:
      return 'Wagons'
    case WAR_HAMMER:
      return 'War Hammer'
    case GREAT_AXE:
      return 'Great Axe'
    case SPEAR:
      return 'Spear'
    case MACE:
      return 'Mace'
    case SWORD:
      return 'Sword'
    case DAGGER:
      return 'Dagger'
    case BUCKLER:
      return 'Buckler'
    case KITE:
      return 'Kite Shield'
    case TOWER:
      return 'Tower Shield'
    case NORMAL_ATTACK:
      return 'Normal Attack'
    case STRONG_ATTACK:
      return 'Strong Attack'
    case WILD_ATTACK:
      return 'Wild Attack'
    case QUICK_ATTACK:
      return 'Quick Attack'
    case DEFENSIVE_STANCE:
      return 'Defensive Stance'
    case RECOVER:
      return 'Recover'
    case RALLY:
      return 'Rally'
    case STAMINA_FULL:
      return 'Full Stamina'
    case STAMINA_HIGH:
      return 'High Stamina'
    case STAMINA_HALF:
      return 'Half Stamina'
    case STAMINA_LOW:
      return 'Low Stamina'
    case STAMINA_EMPTY:
      return 'Zero Stamina'
  }
}
