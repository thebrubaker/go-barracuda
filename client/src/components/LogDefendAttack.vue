<template>
  <div>
    <span class="token punctuation">[{{ turn }}] </span>
    <span class="token entity">ATTACK </span>
    <span class="token function">{{ attacker.name }} </span>
    <span class="token punctuation">took a swing at </span>
    <span class="token function">{{ defender.name }} </span>
    <span class="token punctuation">with a </span>
    <span class="token inserted">{{ attacker.equipment.weapon.name }} </span>
    <span class="token punctuation">but was </span>
    <span class="token variable">{{ getType() }}.</span>
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
