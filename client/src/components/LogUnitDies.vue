<template>
  <div>
    <span class="token punctuation">[{{ turn }}] </span>
    <span class="token entity">DEATH </span>
    <span class="token function">{{ defender.name }} </span>
    <span class="token punctuation">died at the hands of </span>
    <span class="token function">{{ attacker.name }}.</span>
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
