<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">INFO </span>
    <span>The last attack on </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
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
  methods: {},
}
</script>

<style lang="scss"></style>
