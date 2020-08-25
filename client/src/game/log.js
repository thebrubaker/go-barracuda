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
            'Split Open',
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
        `loosed ${adjective} jab at`,
        `unleashed a flurry of thrusts at`,
        `took ${adjective} stab at`,
        `lashed out at`,
        `stole ${adjective} attack on`,
        `took ${adjective} stab at`,
      ])
  }
}

export function getBodyPart({ bodyPart, swingType, attackType, damageType }) {
  return getRandomItem(
    bodyParts.filter(({ bodyParts, swingTypes, attackTypes, damageTypes }) => {
      return (
        bodyParts.includes(bodyPart) &&
        attackTypes.includes(attackType) &&
        damageTypes.includes(damageType) &&
        swingTypes.includes(swingType)
      )
    })
  ).text
}

const bodyParts = [
  {
    text: 'Leg',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Thigh',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Knee',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Upper Leg',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Lower Leg',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Calf',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Ankle',
    bodyParts: [LEFT_LEG, RIGHT_LEG],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Arm',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Wrist',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Shoulder',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Upper Arm',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Lower Arm',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Elbow',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Head',
    bodyParts: [HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Skull',
    bodyParts: [HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Neck',
    bodyParts: [HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Throat',
    bodyParts: [HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Face',
    bodyParts: [HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Chest',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Stomach',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Clavicle',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Shoulder',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Abdomen',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Upper Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Lower Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Ribs',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Belly',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Upper Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Lower Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
]
