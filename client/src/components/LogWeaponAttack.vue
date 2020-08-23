<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-orange-300">COMBAT </span>
    <span class="text-yellow-100">{{ attacker.name }} </span>
    <span class="">{{ getHitType() }} </span>
    <span class="text-yellow-100">{{ defender.name }} </span>
    <span class="">with a </span>
    <span class="text-orange-200">{{ attacker.equipment.weapon.name }} </span>
    <span class="">and </span>
    <span class="text-red-500">Hit </span>
    <span class="">their </span>
    <span class="text-blue-300">{{ bodyPart }}.</span>
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
