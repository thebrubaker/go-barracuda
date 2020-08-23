<template>
  <div>
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-red-400">DEATH </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
    <span class="">died at the hands of </span>
    <span class="text-yellow-100">{{ attacker.name }}.</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['turn', 'attacker', 'defender'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
