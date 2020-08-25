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

export function getDamageType({ bodyPart, swingType, attackType, damageType }) {
  return getRandomItem(
    damageTypes.filter(
      ({ bodyParts, swingTypes, attackTypes, damageTypes }) => {
        return (
          bodyParts.includes(bodyPart) &&
          attackTypes.includes(attackType) &&
          damageTypes.includes(damageType) &&
          swingTypes.includes(swingType)
        )
      }
    )
  ).text
}

const damageTypes = [
  {
    text: 'Cut Into',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Slashed',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Gashed',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Slit',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Lacerated',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Hacked',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Cleaved',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Split Open',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Carved',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Hacked',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH],
    swingTypes: [SWING],
  },
  {
    text: 'Punctured',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Perforated',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Ruptured',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Pierced',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Impaled',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Gored',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: 'Fractured',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST],
  },
  {
    text: 'Smashed It Into',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Crushed',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Rammed It Into',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Struck',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Hit',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Pounded',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Cracked',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Split',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Broke',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Shattered',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
  {
    text: 'Splintered',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
    swingTypes: [THRUST, SWING],
  },
]

export function getHitAdjective({
  bodyPart,
  swingType,
  attackType,
  damageType,
}) {
  return getRandomItem(
    hitAdjectives.filter(
      ({ bodyParts, swingTypes, attackTypes, damageTypes }) => {
        return (
          (bodyParts.includes(bodyPart) || !bodyPart) &&
          attackTypes.includes(attackType) &&
          damageTypes.includes(damageType) &&
          swingTypes.includes(swingType)
        )
      }
    )
  ).text
}

const hitAdjectives = [
  {
    text: 'a violent',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a ferocious',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a powerful',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an intense',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a strong',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a hefty',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a vigorous',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a high-powered',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a thunderous',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a stiff',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a mighty',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [STRONG_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a quick',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a fast',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a swift',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a speedy',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a rapid',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a quick, blurring',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },

  {
    text: 'a wild',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an unbalanced',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an untamed',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an intimidating',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a blustery',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a tempestuous',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a stormy',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an out of control',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'an unrestrained',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a chaotic',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a riotous',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },

  {
    text: 'a solid',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a trained',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a firm',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a substantial',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a tentative',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a studied',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a deliberate',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'a calculated',
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
]

export function getHitType({ bodyPart, swingType, attackType, damageType }) {
  const adjective = getHitAdjective({
    bodyPart,
    swingType,
    attackType,
    damageType,
  })
  return getRandomItem(
    hitTypes.filter(({ bodyParts, swingTypes, attackTypes, damageTypes }) => {
      return (
        (bodyParts.includes(bodyPart) || !bodyPart) &&
        attackTypes.includes(attackType) &&
        damageTypes.includes(damageType) &&
        swingTypes.includes(swingType)
      )
    })
  ).text(adjective)
}

const hitTypes = [
  {
    text: adjective => `took ${adjective} swing at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING],
  },
  {
    text: adjective => `let loose ${adjective} swipe at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING],
  },
  {
    text: adjective => `unleashed ${adjective} attack on`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: adjective => `loosed ${adjective} attack on`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: adjective => `stole ${adjective} attack on`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: () => `lashed out at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: adjective => `took ${adjective} strike at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: adjective => `took ${adjective} swipe at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT],
    swingTypes: [SWING],
  },

  {
    text: adjective => `took ${adjective} stab at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: adjective => `unleashed ${adjective} lunge on`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: adjective => `took ${adjective} thrust at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: adjective => `loosed ${adjective} jab at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [THRUST],
  },
  {
    text: () => `unleashed a flurry of thrusts at`,
    bodyParts: [LEFT_LEG, RIGHT_LEG, LEFT_ARM, RIGHT_ARM, HEAD, BODY],
    attackTypes: [QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [THRUST],
  },
]

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
    damageTypes: [BLUNT],
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
    damageTypes: [BLUNT],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Arm',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Wrist',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT],
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
    damageTypes: [SLASH, BLUNT],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Lower Arm',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Elbow',
    bodyParts: [LEFT_ARM, RIGHT_ARM],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT],
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
    damageTypes: [BLUNT],
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
    damageTypes: [SLASH, PIERCE],
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
    damageTypes: [SLASH, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Clavicle',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [BLUNT],
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
    damageTypes: [SLASH, PIERCE],
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
    damageTypes: [SLASH, PIERCE],
    swingTypes: [SWING, THRUST],
  },
  {
    text: 'Back',
    bodyParts: [BODY],
    attackTypes: [NORMAL_ATTACK, STRONG_ATTACK, QUICK_ATTACK, WILD_ATTACK],
    damageTypes: [SLASH, BLUNT, PIERCE],
    swingTypes: [SWING, THRUST],
  },
]
