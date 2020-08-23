<template>
  <div>
    <span class="token punctuation">[{{ turn }}] </span>
    <span class="token entity">ATTACK </span>
    <span class="token function">{{ attacker.name }} </span>
    <span class="token punctuation">{{ getHitType() }} </span>
    <span class="token function">{{ defender.name }} </span>
    <span class="token punctuation">with a </span>
    <span class="token inserted">{{ attacker.equipment.weapon.name }} </span>
    <span class="token punctuation">and </span>
    <span class="token variable">Hit </span>
    <span class="token punctuation">their </span>
    <span class="token constant">{{ bodyPart }}.</span>
  </div>
</template>

<script>
function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}
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
    return {
      lastHitType: null,
      hitTypes: [
        'took a swing at',
        'unleashed an attack on',
        'took a violent swing at',
        'swiped at',
        'loosed an attack on',
        'unleashed a flurry of attacks at',
        'took a tentative swipe at',
        'lashed out at',
        'stole a quick attack on',
        'ferociously struck at',
        'took a wild swipe at',
      ],
      damageTypes: [
        { text: 'Barely Grazed', value: 1 },
        { text: 'Hit', value: 2 },
        { text: 'Slashed Into', value: 5 },
        { text: 'Cut Deep Into', value: 8 },
      ],
    }
  },
  methods: {
    getHitType() {
      return getRandomItem(this.hitTypes)
    },
  },
}
</script>

<style lang="scss"></style>
