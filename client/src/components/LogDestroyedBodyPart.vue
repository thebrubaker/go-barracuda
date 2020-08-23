<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-indigo-300">INFO </span>
    <span class="">The </span>
    <span class="text-blue-300">{{ bodyPart }} </span>
    <span class="">of </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
    <span class="">{{ getType() }}.</span>
  </div>
</template>

<script>
function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}
export default {
  components: {},
  props: ['turn', 'bodyPart', 'defender'],
  data() {
    return {
      types: [
        'has been rendered useless',
        'has lost all functionality',
        'has become bloody and useless',
        'is hanging limp and useless',
        'has been destroyed',
      ],
    }
  },
  methods: {
    getType() {
      return getRandomItem(this.types)
    },
  },
}
</script>

<style lang="scss"></style>
