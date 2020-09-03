import {
  MATERIAL_WOOD,
  MATERIAL_STONE,
  MATERIAL_IRON,
  MATERIAL_STEEL,
  MATERIAL_GLASS,
  MATERIAL_CLAY,
} from '../game/resources'

export const materials = [
  MATERIAL_WOOD,
  MATERIAL_STONE,
  MATERIAL_IRON,
  MATERIAL_STEEL,
  MATERIAL_GLASS,
  MATERIAL_CLAY,
]

export function getMaterialName(materialKey) {
  switch (materialKey) {
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
  }
}
