<template>
  <div class="relative cursor-pointer border-gray-200 border-b px-4">
    <span
      v-if="selected"
      class="w-1 h-full absolute left-0 top-0 bg-blue-500"
    ></span>
    <div
      href="#"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="py-2 flex items-center">
        <div class="min-w-0 flex flex-1 sm:items-center sm:justify-between">
          <div class="flex items-center text-xs leading-5 text-gray-500">
            <div class="inline-block h-4 w-4 text-white shadow-solid mr-1.5">
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
            <div
              v-if="isMissingLimb"
              class="inline-block h-3 w-3 ml-2 text-white"
            >
              <el-tooltip
                class="item"
                effect="dark"
                content="Damaged Limb"
                placement="top-start"
              >
                <img :src="require(`@/assets/icons/slash.png`)" alt="" />
              </el-tooltip>
            </div>
          </div>
          <div class="text-xs text-gray-500">
            {{ unit.action }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
  LEFT_ARM,
  RIGHT_ARM,
  LEFT_LEG,
  RIGHT_LEG,
} from '@/game/units'

export default {
  components: {},
  props: {
    unit: {
      required: true,
      type: Object,
    },
    selected: {
      required: false,
      type: Boolean,
      default: false,
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
    isMissingLimb() {
      return (
        !this.unit.bodyParts.includes(RIGHT_ARM) ||
        !this.unit.bodyParts.includes(LEFT_ARM) ||
        !this.unit.bodyParts.includes(LEFT_LEG) ||
        !this.unit.bodyParts.includes(RIGHT_LEG)
      )
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
