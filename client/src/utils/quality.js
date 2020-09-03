import {
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
} from '../game/armor'

export const quality = [
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
]

export function getQualityName(key) {
  switch (key) {
    case QUALITY_LOW:
      return 'Low Quality'
    case QUALITY_NORMAL:
      return 'Normal Quality'
    case QUALITY_HIGH:
      return 'High Quality'
    case QUALITY_LEGENDARY:
      return 'Legendary Quality'
  }
}
