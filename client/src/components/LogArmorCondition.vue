<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">INFO </span>
    <span>The last attack on </span>
    <span :class="getNameColorClass(defender)">{{ defender.name }} </span>
    <span class="">left their armor looking worn.</span>
  </div>
</template>

<script>
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
    getNameColorClass(unit) {
      if (unit.team === 1) {
        return { 'text-green-400': true }
      } else {
        return { 'text-indigo-500': true }
      }
    },
  },
}
</script>

<style lang="scss"></style>
