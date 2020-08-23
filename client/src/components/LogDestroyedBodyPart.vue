<template>
  <div>
    <span class="token punctuation">[{{ turn }}] </span>
    <span class="token entity">INFO </span>
    <span class="token punctuation">The </span>
    <span class="token constant">{{ bodyPart }} </span>
    <span class="token punctuation">of </span>
    <span class="token function">{{ defender.name }} </span>
    <span class="token punctuation">{{ getType() }}.</span>
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
