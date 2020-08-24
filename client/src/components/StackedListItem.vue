<template>
  <li>
    <a
      href="#"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="px-4 py-2 flex items-center">
        <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="flex">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <div
                  class="inline-block h-6 w-6 text-white shadow-solid mr-1.5"
                >
                  <img :src="require(`@/assets/${types[unit.type]}`)" alt="" />
                </div>
                <span
                  :class="{
                    'line-through': !unit.alive,
                    'text-red-600': !unit.alive,
                  }"
                >
                  {{ unit.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="unit.alive"
          class="min-w-0 sm:flex sm:items-center sm:justify-between"
        >
          <div
            class="flex-shrink-0"
            v-for="(_, index) in filledExhaustion"
            :key="index"
          >
            <svg
              class="h-5 w-5"
              :class="exhaustionColor"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            class="flex-shrink-0"
            v-for="(_, index) in emptyExhaustion"
            :key="index + unit.maxExhaustion"
          >
            <svg
              class="h-5 w-5 text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import {
  HUMAN_BRIGAND,
  HUMAN_SHOOTER,
  HUMAN_STEAMER,
  HUMAN_WOODCUTTER,
  HUMAN_ROBBER,
  GOBLIN_MELEE,
  GOBLIN_RANGED,
  GOBLIN_LEADER,
} from '../game/units'

export default {
  components: {},
  props: {
    unit: {
      required: true,
      type: Object,
    },
  },
  computed: {
    exhaustionColor() {
      if (this.unit.exhaustion >= this.unit.maxExhaustion * 0.75) {
        return {
          'text-red-800': true,
        }
      }
      if (this.unit.exhaustion >= this.unit.maxExhaustion * 0.5) {
        return {
          'text-yellow-400': true,
        }
      }
      return {
        'text-green-500': true,
      }
    },
    unitsOfExhaustion() {
      return Math.round((this.unit.exhaustion / this.unit.maxExhaustion) * 10)
    },
    filledExhaustion() {
      return [...Array(this.unitsOfExhaustion)]
    },
    emptyExhaustion() {
      return this.unit.exhaustion > this.unit.maxExhaustion
        ? []
        : [...Array(10 - this.unitsOfExhaustion)]
    },
  },
  data() {
    return {
      types: {
        [HUMAN_BRIGAND]: 'Brigand.png',
        [HUMAN_SHOOTER]: 'Shooter.png',
        [HUMAN_STEAMER]: 'SteamMan.png',
        [HUMAN_WOODCUTTER]: 'Woodcutter.png',
        [HUMAN_ROBBER]: 'GraveRobber.png',
        [GOBLIN_MELEE]: 'Goblin_Melee.png',
        [GOBLIN_RANGED]: 'Goblin_Range.png',
        [GOBLIN_LEADER]: 'Goblin_Mage.png',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
