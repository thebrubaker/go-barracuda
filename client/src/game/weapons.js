import { getRandomItem } from './utils'
import {
  NORMAL_ATTACK,
  STRONG_ATTACK,
  QUICK_ATTACK,
  WILD_ATTACK,
} from './combat'

export const SWING = Symbol()
export const THRUST = Symbol()

export const SLASH = Symbol()
export const BLUNT = Symbol()
export const PIERCE = Symbol()

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

export const WarHammer = {
  attackTypes: [NORMAL_ATTACK, STRONG_ATTACK],
  damageTypes: { SWING: [BLUNT] },
  size: 3,
}

export const GreatAxe = {
  attackTypes: [WILD_ATTACK, STRONG_ATTACK],
  damageTypes: { SWING: [SLASH] },
  size: 3,
}

export const Spear = {
  attackTypes: [NORMAL_ATTACK],
  damageTypes: { THRUST: [PIERCE] },
  size: 2,
}

export const Mace = {
  attackTypes: [NORMAL_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: [BLUNT] },
  size: 2,
}

export const Sword = {
  attackTypes: [NORMAL_ATTACK, WILD_ATTACK, QUICK_ATTACK, STRONG_ATTACK],
  damageTypes: { [SWING]: [SLASH], [THRUST]: [PIERCE] },
  size: 2,
}

export const Dagger = {
  attackTypes: [NORMAL_ATTACK, QUICK_ATTACK],
  damageTypes: { [SWING]: [SLASH], [THRUST]: [PIERCE] },
  size: 1,
}
