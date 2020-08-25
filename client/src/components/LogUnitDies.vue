<template>
  <div>
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-red-400">DEATH </span>
    <span :class="getNameColorClass(defender.team)">{{ defender.name }} </span>
    <span class="">died at the hands of </span>
    <span :class="getNameColorClass(attacker.team)">{{ attacker.name }}.</span>
  </div>
</template>

<script>
import { getNameColorClass } from '../utils/combat'

export default {
  components: {},
  props: ['turn', 'attacker', 'defender'],
  data() {
    return {}
  },
  methods: { getNameColorClass },
}
</script>

<style lang="scss"></style>
