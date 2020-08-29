<template>
  <div class="h-screen flex overflow-hidden bg-white">
    <!-- Off-canvas menu for mobile -->
    <MobileMenu></MobileMenu>
    <!-- Static sidebar for desktop -->
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import MobileMenu from './components/MobileMenu'
export default {
  components: { Sidebar, MobileMenu },
  props: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss"></style>
