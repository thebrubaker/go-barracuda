import {
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
} from '../game/resources'

export const resources = [
  RESOURCE_FOOD,
  RESOURCE_WATER,
  RESOURCE_TENT,
  RESOURCE_WAGON,
]

export function getResourceName(resourceKey) {
  switch (resourceKey) {
    case RESOURCE_FOOD:
      return 'Food'
    case RESOURCE_WATER:
      return 'Water'
    case RESOURCE_TENT:
      return 'Tents'
    case RESOURCE_WAGON:
      return 'Wagons'
  }
}

export function getResourceIcon(resourceKey) {
  switch (resourceKey) {
    case RESOURCE_FOOD:
      return require(`@/assets/icons/medieval/food/2.png`)
    case RESOURCE_WATER:
      return require(`@/assets/icons/medieval/food/12.png`)
    case RESOURCE_TENT:
      return require(`@/assets/icons/medieval/tools/6.png`)
    case RESOURCE_WAGON:
      return require(`@/assets/icons/medieval/property/8.png`)
  }
}
