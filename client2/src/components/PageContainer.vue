<template>
  <!-- Main column -->
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <!-- Search header -->
    <SearchHeader></SearchHeader>
    <main
      class="flex flex-col flex-1 relative z-0 overflow-y-auto focus:outline-none"
      tabindex="0"
    >
      <slot></slot>
    </main>
  </div>
</template>

<script>
import SearchHeader from './SearchHeader'

export default {
  components: { SearchHeader },
  props: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
