import { getRandomItem } from './utils'
import {
  NORMAL_ATTACK,
  STRONG_ATTACK,
  QUICK_ATTACK,
  WILD_ATTACK,
} from './combat'

export const SWING = 'SWING'
export const THRUST = 'THRUST'

export const SLASH = 'SLASH'
export const BLUNT = 'BLUNT'
export const PIERCE = 'PIERCE'

export const WAR_HAMMER = 'WAR_HAMMER'
export const GREAT_AXE = 'GREAT_AXE'
export const SPEAR = 'SPEAR'
export const MACE = 'MACE'
export const SWORD = 'SWORD'
export const DAGGER = 'DAGGER'

export const WarHammer = {
  type: WAR_HAMMER,
  attackTypes: [NORMAL_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: BLUNT },
  size: 3,
}

export const GreatAxe = {
  type: GREAT_AXE,
  attackTypes: [WILD_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: SLASH },
  size: 3,
}

export const Spear = {
  type: SPEAR,
  attackTypes: [NORMAL_ATTACK],
  damageTypes: { [THRUST]: PIERCE },
  size: 2,
}

export const Mace = {
  type: MACE,
  attackTypes: [NORMAL_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: BLUNT },
  size: 2,
}

export const Sword = {
  type: SWORD,
  attackTypes: [NORMAL_ATTACK, WILD_ATTACK, QUICK_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: SLASH, [THRUST]: PIERCE },
  size: 2,
}

export const Dagger = {
  type: DAGGER,
  attackTypes: [NORMAL_ATTACK, QUICK_ATTACK],
  damageTypes: { [SWING]: SLASH, [THRUST]: PIERCE },
  size: 1,
}

export function randomGoblinWeapon() {
  return getRandomItem([
    {
      type: Sword,
      name: getRandomItem(['Short Sword', 'Small Scimitar']),
    },
    getRandomMace(),
    getRandomDagger(),
  ])
}

export function randomFighterWeapon() {
  return getRandomItem([
    {
      type: WarHammer,
      name: getRandomItem([
        'Heavy War Hammer',
        'Spiked War Hammer',
        'Large Spiked Hammer',
        'Kanabō',
        'Tetsubō',
      ]),
    },
    {
      type: GreatAxe,
      name: getRandomItem([
        'Great Battle Axe',
        'Double-Sided Battle Axe',
        'Pole Axe',
        'War Scythe',
      ]),
    },
    {
      type: Spear,
      name: getRandomItem([
        'Long Spear',
        'Halberd',
        'Polearm',
        'Partisan',
        'Trident',
        'Glaive',
        'Boar Spear',
        'Two-Pronged Fork',
        'Lance',
        'Javelin',
      ]),
    },
    getRandomMace(),
    {
      type: Sword,
      name: getRandomItem([
        'Long Sword',
        'Short Sword',
        'Scimitar',
        'Curtana',
        'Rapier',
        'Sabre',
      ]),
    },
    getRandomDagger(),
  ])
}

export function getRandomMace() {
  return {
    type: Mace,
    name: getRandomItem([
      'War Mace',
      'Morning Star',
      'Shishpar',
      'Eight Flanged Mace',
      'Club',
      'Studded Club',
      'Spiked Club',
    ]),
  }
}

export function getRandomDagger() {
  return {
    type: Dagger,
    name: getRandomItem([
      'Fine Dagger',
      'Dirk',
      'Stiletto',
      'Facón',
      'Khukuri',
      'Kris',
      'Kard',
    ]),
  }
}
