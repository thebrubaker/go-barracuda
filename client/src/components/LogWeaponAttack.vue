<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">COMBAT </span>
    <span class="text-yellow-100">{{ attacker.name }} </span>
    <span class="">{{ getHitType() }} </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
    <span class="">with a </span>
    <span class="text-orange-200">{{ attacker.equipment.weapon.name }} </span>
    <span class="">and </span>
    <span class="text-red-500">{{ getDamageType(attackType) }} </span>
    <span class="">their </span>
    <span class="text-blue-300">{{ getBodyPart(bodyPart) }}.</span>
  </div>
</template>

<script>
import { getRandomItem } from '../game/utils'
import {
  BODY,
  HEAD,
  LEFT_ARM,
  RIGHT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
} from '../game/units'
import {
  NORMAL_ATTACK,
  STRONG_ATTACK,
  QUICK_ATTACK,
  WILD_ATTACK,
} from '../game/combat'

export default {
  components: {},
  props: [
    'turn',
    'type',
    'attacker',
    'defender',
    'attackType',
    'defenseType',
    'bodyPart',
  ],
  data() {
    return {
      lastHitType: null,
      hitTypes: [
        'took a swing at',
        'unleashed an attack on',
        'took a violent swing at',
        'swiped at',
        'loosed an attack on',
        'unleashed a flurry of attacks at',
        'took a tentative swipe at',
        'lashed out at',
        'stole a quick attack on',
        'ferociously struck at',
        'took a wild swipe at',
      ],
    }
  },
  methods: {
    getDamageType(attackType) {
      switch (attackType) {
        case NORMAL_ATTACK:
        case STRONG_ATTACK:
        case QUICK_ATTACK:
        case WILD_ATTACK:
          return getRandomItem([
            'Slashed Into',
            'Cut Into',
            'Cut',
            'Slashed',
            'Gashed',
            'Slit',
            'Lacerated',
            'Hacked',
            'Punctured',
            'Fractured',
          ])
      }
    },
    getHitType() {
      return getRandomItem(this.hitTypes)
    },
    getBodyPart(type) {
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
            'Body',
            'Back',
            'Upper Back',
            'Lower Back',
          ])
        case HEAD:
          return getRandomItem(['Head', 'Eyes', 'Neck', 'Throat', 'Face'])
        case LEFT_ARM:
        case RIGHT_ARM:
          return getRandomItem([
            'Arm',
            'Wrist',
            'Shoulder',
            'Upper Arm',
            'Lower Arm',
            'Elbow',
            'Hand',
          ])
        case LEFT_LEG:
        case RIGHT_LEG:
          return getRandomItem([
            'Leg',
            'Thigh',
            'Upper Leg',
            'Lower Leg',
            'Calf',
            'Ankle',
            'Foot',
          ])
      }
    },
  },
}
</script>

<style lang="scss"></style>
