<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">COMBAT </span>
    <span :class="getNameColorClass(attacker.team)">{{ attacker.name }} </span>
    <span class="">{{ getHitType() }} </span>
    <span :class="getNameColorClass(defender.team)">{{ defender.name }} </span>
    <span class="">with a </span>
    <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
    <span class="">but their armor stopped the attack. </span>
  </div>
</template>

<script>
import { getNameColorClass } from '../utils/combat'
import { getRandomItem } from '@/game/utils'

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
    return {}
  },
  methods: {
    getNameColorClass,
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
  },
}
</script>

<style lang="scss"></style>
