import { randomFighterWeapon, randomGoblinWeapon } from './weapons'
import { getRandomItem, getRandomInt } from './utils'

export const HEAD = 'HEAD'
export const BODY = 'BODY'
export const LEFT_ARM = 'LEFT_ARM'
export const RIGHT_ARM = 'RIGHT_ARM'
export const LEFT_LEG = 'LEFT_LEG'
export const RIGHT_LEG = 'RIGHT_LEG'

export const HUMAN_FIGHTER = Symbol()

export const LEATHER = Symbol()
export const CHAINMAIL = Symbol()
export const SHIELD = Symbol()

export const GOBLIN_MELEE = Symbol()
export const GOBLIN_LEADER = Symbol()
export const GOBLIN_RANGED = Symbol()

export function generateGoblin() {
  return {
    name: getRandomItem([
      'Goblin Scout',
      'Goblin Fighter',
      'Goblin Warrior',
      'Mutant Goblin',
      'Small Goblin',
    ]),
    type: getRandomItem([GOBLIN_MELEE, GOBLIN_LEADER, GOBLIN_RANGED]),
    equipment: getRandomGoblinEquipment(),
    bodyParts: newBodyParts(),
    exhaustion: 0,
    speed: getRandomInt(1) + 0,
    actions: getRandomInt(1) + 1,
    morale: 0,
    alive: true,
  }
}

export function generateFighter() {
  let firstName = getRandomItem([
    'Abrielle',
    'Adair',
    'Adara',
    'Adriel',
    'Aiyana',
    'Alissa',
    'Alixandra',
    'Altair',
    'Amara',
    'Anatola',
    'Anya',
    'Arcadia',
    'Ariadne',
    'Arianwen',
    'Aurelia',
    'Aurelian',
    'Aurelius',
    'Avalon',
    'Acalia',
    'Alaire',
    'Auristela',
    'Bastian',
    'Breena',
    'Brielle',
    'Briallan',
    'Briseis',
    'Cambria',
    'Cara',
    'Carys',
    'Caspian',
    'Cassia',
    'Cassiel',
    'Cassiopeia',
    'Cassius',
    'Chaniel',
    'Cora',
    'Corbin',
    'Cyprian',
    'Daire',
    'Darius',
  ])
  let lastName = getRandomItem([
    'Liron',
    'Maia',
    'Marius',
    'Mathieu',
    'Mireille',
    'Mireya',
    'Maylea',
    'Meira',
    'Natania',
    'Nerys',
    'Nuriel',
    'Nyssa',
    'Neirin',
    'Nyfain',
    'Oisin',
    'Oralie',
    'Orion',
    'Orpheus',
    'Ozara',
    'Oleisa',
    'Orinthea',
    'Peregrine',
    'Persephone',
    'Perseus',
  ])

  return {
    name: `${firstName} ${lastName}`,
    type: HUMAN_FIGHTER,
    equipment: getRandomFighterEquipment(),
    bodyParts: newBodyParts(),
    exhaustion: 0,
    speed: getRandomInt(2) + 3,
    actions: getRandomInt(2) + 3,
    morale: getRandomInt(2) + 1,
    alive: true,
  }
}

function getRandomGoblinEquipment() {
  return getRandomItem([
    {
      head: null,
      body: null,
      weapon: randomGoblinWeapon(),
      shield: null,
    },
    {
      head: null,
      body: LEATHER,
      weapon: randomGoblinWeapon(),
      shield: null,
    },
  ])
}

function getRandomFighterEquipment() {
  return getRandomItem([
    {
      head: LEATHER,
      body: LEATHER,
      weapon: randomFighterWeapon(),
      shield: getRandomItem([null, SHIELD]),
    },
    {
      head: CHAINMAIL,
      body: CHAINMAIL,
      weapon: randomFighterWeapon(),
      shield: getRandomItem([null, SHIELD]),
    },
  ])
}

function newBodyParts() {
  return [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]
}
