<template>
  <div class="text-white">
    <span class="text-gray-400">[{{ turn }}] </span>
    <span class="text-indigo-300">INFO </span>
    <span class="">The </span>
    <span class="text-blue-300">{{ getBodyPart(bodyPart) }} </span>
    <span class="">of </span>
    <span :class="getNameColorClass(defender.team)">{{ defender.name }} </span>
    <span class="">{{ getType() }}.</span>
  </div>
</template>

<script>
import { getNameColorClass } from '../utils/combat'
import { getRandomItem } from '@/game/utils'
import { LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG } from '@/game/units'
export default {
  components: {},
  props: ['turn', 'bodyPart', 'defender'],
  data() {
    return {
      types: [
        'has been rendered useless',
        'has lost all functionality',
        'has become bloody and worthless',
        'has become useless',
        'has been destroyed',
        'is a bloody mess',
        'is drenched in blood and no good',
      ],
    }
  },
  methods: {
    getNameColorClass,
    getType() {
      return getRandomItem(this.types)
    },
    getBodyPart(type) {
      switch (type) {
        case LEFT_ARM:
          return getRandomItem(['Left Arm'])
        case RIGHT_ARM:
          return getRandomItem(['Right Arm'])
        case LEFT_LEG:
          return getRandomItem(['Left Leg'])
        case RIGHT_LEG:
          return getRandomItem(['Right Leg'])
      }
    },
  },
}
</script>

<style lang="scss"></style>
