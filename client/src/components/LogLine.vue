<template>
  <div class="log-line">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tokens: {
        keyword: ['/', '/'],
        operator: ['*', '*'],
        string: ['_', '_'],
        boolean: ['-', '-'],
        punctuation: ['(', ')'],
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
