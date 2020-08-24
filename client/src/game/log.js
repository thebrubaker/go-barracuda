import { getRandomItem } from './utils'
import { BODY, HEAD, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG } from './units'
import {
  NORMAL_ATTACK,
  STRONG_ATTACK,
  QUICK_ATTACK,
  WILD_ATTACK,
} from './combat'
import { SWING, THRUST, SLASH, BLUNT, PIERCE } from './weapons'

export function getDeathType() {
  return getRandomItem([''])
}

export function getBlockType() {
  return getRandomItem(['Blocked', 'Knocked Back', 'Stopped', 'Deflected'])
}

export function getParryType() {
  return getRandomItem([
    'Parried',
    'Knocked Away',
    'Warded Off',
    'Deflected',
    'Held Off',
    'Blocked',
    'Rebuffed',
    'Repelled',
    'Countered',
  ])
}

export function getDodgeType() {
  return getRandomItem([
    'Dodged',
    'Ducked Under',
    'Evaded',
    'Side-Stepped',
    'Sprang From',
    'Leapt From',
    'Dove From',
    'Darted From',
  ])
}

export function getDamageType(swingType, damageType) {
  switch (swingType) {
    case SWING:
      switch (damageType) {
        case SLASH:
          return getRandomItem([
            'Cut Into',
            'Slashed',
            'Gashed',
            'Slit',
            'Lacerated',
            'Hacked',
            'Cleaved',
            'Split',
            'Carved',
            'Hacked',
          ])
        case BLUNT:
          return getRandomItem([
            'Fractured',
            'Smashed Into',
            'Crushed',
            'Rammed Into',
            'Struck',
            'Pounded',
            'Cracked',
            'Split',
            'Broke',
            'Shattered',
            'Splintered',
          ])
      }
      break
    case THRUST:
      switch (damageType) {
        case PIERCE:
          return getRandomItem([
            'Punctured',
            'Perforated',
            'Ruptured',
            'Pierced',
            'Impaled',
            'Gored',
          ])
        case BLUNT:
          return getRandomItem([
            'Fractured',
            'Smashed Into',
            'Crushed',
            'Rammed Into',
            'Struck',
            'Hit',
            'Pounded',
            'Cracked',
            'Split',
            'Broke',
            'Shattered',
            'Splintered',
          ])
      }
  }
}

export function getHitAdjective(attackType) {
  switch (attackType) {
    case STRONG_ATTACK:
      return getRandomItem([
        'a violent',
        'a ferocious',
        'a powerful',
        'an intense',
        'a strong',
        'a hefty',
        'a vigorous',
        'a high-powered',
        'a thunderous',
        'a stiff',
        'a mighty',
      ])
    case QUICK_ATTACK:
      return getRandomItem([
        'a quick',
        'a fast',
        'a swift',
        'a speedy',
        'a rapid',
        'a quick, blurring',
      ])
    case WILD_ATTACK:
      return getRandomItem([
        'a wild',
        'an unbalanced',
        'an untamed',
        'an intimidating',
        'a blustery',
        'a tempestuous',
        'a stormy',
        'an out of control',
        'an unrestrained',
        'a chaotic',
        'a riotous',
      ])
    case NORMAL_ATTACK:
      return getRandomItem([
        'a solid',
        'a trained',
        'a firm',
        'a substantial',
        'a tentative',
        'an unbroken',
        'a stout',
        'a studied',
        'a deliberate',
        'a calculated',
      ])
  }
}

export function getHitType(swingType, attackType) {
  const adjective = getHitAdjective(attackType)
  switch (swingType) {
    case SWING:
      return getRandomItem([
        `took ${adjective} swing at`,
        `let loose ${adjective} swipe at`,
        `took ${adjective} swipe at`,
        `unleashed ${adjective} attack on`,
        `loosed ${adjective} attack on`,
        `stole ${adjective} attack on`,
        `lashed out at`,
        `took ${adjective} strike at`,
        `took ${adjective} swipe at`,
      ])
    case THRUST:
      return getRandomItem([
        `took ${adjective} stab at`,
        `unleashed ${adjective} lunge on`,
        `took ${adjective} thrust at`,
        `loosed ${adjective} jab on`,
        `unleashed a flurry of thrusts at`,
        `took ${adjective} stab at`,
        `lashed out at`,
        `stole ${adjective} attack on`,
        `took ${adjective} stab at`,
      ])
  }
}

export function getBodyPart(type) {
  switch (type) {
    case BODY:
      return getRandomItem([
        'Chest',
        'Stomache',
        'Clavicle',
        'Shoulder',
        'Abdomen',
        'Upper Back',
        'Lower Back',
        'Ribs',
        'Belly',
        'Back',
        'Upper Back',
        'Lower Back',
      ])
    case HEAD:
      return getRandomItem(['Head', 'Skull', 'Neck', 'Throat', 'Face'])
    case LEFT_ARM:
    case RIGHT_ARM:
      return getRandomItem([
        'Arm',
        'Wrist',
        'Shoulder',
        'Upper Arm',
        'Lower Arm',
        'Elbow',
      ])
    case LEFT_LEG:
    case RIGHT_LEG:
      return getRandomItem([
        'Leg',
        'Thigh',
        'Knee',
        'Upper Leg',
        'Lower Leg',
        'Calf',
        'Ankle',
      ])
  }
}
