import {
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
} from '../game/resources'
import {
  HUMAN_BRIGAND,
  HUMAN_SHOOTER,
  HUMAN_STEAMER,
  HUMAN_WOODCUTTER,
  HUMAN_ROBBER,
  GOBLIN_MELEE,
  GOBLIN_RANGED,
  GOBLIN_LEADER,
} from '../game/units'

export const IS_EQUIPPED = 'IS_EQUIPPED'
export const IS_MISSING_LIMB = 'IS_MISSING_LIMB'

export function getIcon(key) {
  switch (key) {
    case RESOURCE_FOOD:
      return require(`@/assets/icons/medieval/food/2.png`)
    case RESOURCE_WATER:
      return require(`@/assets/icons/medieval/food/12.png`)
    case RESOURCE_TENT:
      return require(`@/assets/icons/medieval/tools/6.png`)
    case RESOURCE_WAGON:
      return require(`@/assets/icons/medieval/property/8.png`)
    case HUMAN_BRIGAND:
      return require(`@/assets/Brigand.png`)
    case HUMAN_SHOOTER:
      return require(`@/assets/Shooter.png`)
    case HUMAN_STEAMER:
      return require(`@/assets/SteamMan.png`)
    case HUMAN_WOODCUTTER:
      return require(`@/assets/Woodcutter.png`)
    case HUMAN_ROBBER:
      return require(`@/assets/GraveRobber.png`)
    case GOBLIN_MELEE:
      return require(`@/assets/Goblin_Melee.png`)
    case GOBLIN_RANGED:
      return require(`@/assets/Goblin_Range.png`)
    case GOBLIN_LEADER:
      return require(`@/assets/Goblin_Mage.png`)
    case IS_EQUIPPED:
      return require(`@/assets/icons/swordsman/Icon17.png`)
    case IS_MISSING_LIMB:
      return require(`@/assets/icons/slash.png`)
  }
}
