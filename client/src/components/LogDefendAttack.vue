<template>
  <div>
    <div class="text-white" v-if="defenseType === types.BLOCK">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType(this.swingType, this.attackType) }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with their </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but their shield </span>
      <span class="text-yellow-300">{{ getBlockType() }} </span>
      <span>the attack.</span>
    </div>
    <div class="text-white" v-if="defenseType === types.PARRY">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType(this.swingType, this.attackType) }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with their </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but was </span>
      <span class="text-yellow-300">{{ getParryType() }} </span>
      <span>by their </span>
      <span class="text-orange-300">{{ defender.equipment.weapon.name }}.</span>
    </div>
    <div class="text-white" v-if="defenseType === types.DODGE">
      <span class="text-gray-400">[{{ turn }}] </span>
      <span class="text-orange-300">COMBAT </span>
      <span class="text-yellow-100">{{ attacker.name }} </span>
      <span class="">{{ getHitType(this.swingType, this.attackType) }} </span>
      <span class="text-yellow-100">{{ defender.name }} </span>
      <span class="">with their </span>
      <span class="text-orange-300">{{ attacker.equipment.weapon.name }} </span>
      <span class="">but they </span>
      <span class="text-yellow-300">{{ getDodgeType() }} </span>
      <span>the attack.</span>
    </div>
  </div>
</template>

<script>
import { BLOCK, DODGE, PARRY } from '../game/combat'
import {
  getBlockType,
  getParryType,
  getDodgeType,
  getHitType,
} from '../game/log'

export default {
  components: {},
  props: [
    'turn',
    'type',
    'attacker',
    'defender',
    'attackType',
    'swingType',
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
    getHitType,
    getBlockType,
    getParryType,
    getDodgeType,
  },
}
</script>

<style lang="scss"></style>
