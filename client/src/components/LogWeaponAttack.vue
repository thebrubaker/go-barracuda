<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">COMBAT </span>
    <span :class="getNameColorClass(attacker.team)">{{ attacker.name }} </span>
    <span class=""
      >{{ getHitType({ bodyPart, swingType, attackType, damageType }) }}
    </span>
    <span :class="getNameColorClass(defender.team)">{{ defender.name }} </span>
    <span class="">with their </span>
    <span class="text-orange-200">{{ attacker.equipment.weapon.name }} </span>
    <span class="">and </span>
    <span class="text-red-500"
      >{{ getDamageType({ bodyPart, swingType, attackType, damageType }) }}
    </span>
    <span class="">their </span>
    <span class="text-blue-300"
      >{{ getBodyPart({ bodyPart, swingType, attackType, damageType }) }}.</span
    >
  </div>
</template>

<script>
import { getHitType, getDamageType, getBodyPart } from '../game/log'
import { getNameColorClass } from '../utils/combat'

export default {
  components: {},
  props: [
    'turn',
    'type',
    'attacker',
    'defender',
    'attackType',
    'swingType',
    'damageType',
    'defenseType',
    'bodyPart',
  ],
  data() {
    return {
      lastHitType: null,
    }
  },
  methods: {
    getHitType,
    getDamageType,
    getBodyPart,
    getNameColorClass,
  },
}
</script>

<style lang="scss"></style>
