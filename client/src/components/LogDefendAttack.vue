<template>
  <div>
    <div class="text-white" v-if="defenseType === types.BLOCK">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType() }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with a </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but their shield </span>
      <span class="text-red-400">{{ getBlockMessage() }} </span>
      <span>the attack.</span>
    </div>
    <div class="text-white" v-if="defenseType === types.PARRY">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType() }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with a </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but was </span>
      <span class="text-red-400">{{ getParryMessage() }} </span>
      <span>by their </span>
      <span class="text-orange-300">{{ defender.equipment.weapon.name }}.</span>
    </div>
    <div class="text-white" v-if="defenseType === types.DODGE">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType() }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with a </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but they </span>
      <span class="text-red-400">{{ getDodgeMessage() }} </span>
      <span>the attack.</span>
    </div>
  </div>
</template>

<script>
import { getRandomItem } from '../game/utils'
import { BLOCK, DODGE, PARRY } from '../game/combat'

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
      types: {
        BLOCK: BLOCK,
        DODGE: DODGE,
        PARRY: PARRY,
      },
    }
  },
  methods: {
    getHitType() {
      return getRandomItem([
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
      ])
    },
    getBlockMessage() {
      return getRandomItem(['Blocked', 'Knocked Back', 'Stopped'])
    },
    getParryMessage() {
      return getRandomItem([
        'Parried',
        'Knocked Away',
        'Warded Off',
        'Deflected',
        'Held Off',
        'Blocked',
        'Averted',
        'Rebuffed',
        'Repelled',
        'Countered',
      ])
    },
    getDodgeMessage() {
      return getRandomItem([
        'Dodged',
        'Ducked Under',
        'Evaded',
        'Side-Stepped',
        'Sprang From',
        'Jumped Away From',
        'Shook',
        'Dove From',
      ])
    },
  },
}
</script>

<style lang="scss"></style>
