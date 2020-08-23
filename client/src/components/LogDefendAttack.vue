<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">COMBAT </span>
    <span class="text-yellow-100">{{ attacker.name }} </span>
    <span class="">took a swing at </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
    <span class="">with a </span>
    <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
    <span class="">but was </span>
    <span class="text-red-400">{{ getType() }}.</span>
  </div>
</template>

<script>
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
    return {}
  },
  methods: {
    getType() {
      if (this.defenseType === BLOCK) {
        return 'Blocked'
      }
      if (this.defenseType === DODGE) {
        return 'Dodged'
      }
      if (this.defenseType === PARRY) {
        return 'Parried'
      }
    },
  },
}
</script>

<style lang="scss"></style>
