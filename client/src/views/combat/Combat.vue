<template>
  <PageContainer @keyup.space="nextTick">
    <PageHeader>
      <div class="flex-1 min-w-0">
        <h1 class="text-sm font-medium leading-6 text-gray-400 sm:truncate">
          Combat Simulator
        </h1>
        <small class="text-gray-600 text-lg"
          >Goblin Smashers vs Goblin Raiders</small
        >
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <el-button
          @click="nextTick"
          class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md"
          >Next Tick</el-button
        >
      </div>
    </PageHeader>
    <el-row style="height: 75%">
      <el-col
        :span="12"
        class="border-gray-200 border-r overflow-y-scroll h-full pt-2"
      >
        <StackedListItem
          v-for="unit in redTeam"
          @click.native="selectUnit()"
          :key="unit.key"
          :unit="unit"
          :selected="isCurrentUnit(unit) || isCurrentTarget(unit)"
        />
      </el-col>
      <el-col :span="12" class="overflow-y-scroll h-full pt-2">
        <StackedListItem
          v-for="unit in blueTeam"
          :key="unit.key"
          :unit="unit"
          :selected="isCurrentUnit(unit) || isCurrentTarget(unit)"
        />
      </el-col>
    </el-row>
    <el-row class="bg-gray-700 shadow-inner overflow-scroll flex-1 relative">
      <el-col
        class="log-container theme-dark flex flex-col-reverse text-white justify-end px-4 py-2 text-sm h-full"
        :span="24"
      >
        <LogLine
          v-for="(log, index) in gameState.logs"
          :key="index"
          class="flex align-middle"
        >
          <div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-right w-4 h-4 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <LogWeaponAttack
            v-if="log.type === 'WeaponAttack'"
            v-bind="log"
          ></LogWeaponAttack>
          <LogDefendAttack
            v-if="log.type === 'DefendAttack'"
            v-bind="log"
          ></LogDefendAttack>
          <LogUnitDies
            v-if="log.type === 'UnitDies'"
            v-bind="log"
          ></LogUnitDies>
          <LogArmorCondition
            v-if="log.type === 'ArmorCondition'"
            v-bind="log"
          ></LogArmorCondition>
          <LogArmorDefense
            v-if="log.type === 'ArmorDefense'"
            v-bind="log"
          ></LogArmorDefense>
        </LogLine>
      </el-col>
    </el-row>
  </PageContainer>
</template>

<script>
// @ is an alias to /src
import { gameState, nextTick } from '@/game'
import { getRandomItem } from '@/game/utils'
import { BLOCK, DODGE, PARRY } from '@/game/combat'
import PageContainer from '@/components/PageContainer'
import PageHeader from '@/components/PageHeader'
import StackedListItem from './components/StackedListItem'
import LogLine from './components/LogLine'
import LogWeaponAttack from './components/LogWeaponAttack'
import LogDefendAttack from './components/LogDefendAttack'
import LogUnitDies from './components/LogUnitDies'
import LogArmorCondition from './components/LogArmorCondition'
import LogArmorDefense from './components/LogArmorDefense'

export default {
  name: 'Home',
  components: {
    PageContainer,
    PageHeader,
    StackedListItem,
    LogLine,
    LogWeaponAttack,
    LogDefendAttack,
    LogUnitDies,
    LogArmorCondition,
    LogArmorDefense,
  },
  data() {
    return {
      gameState,
      selectedUnit: null,
    }
  },
  computed: {
    redTeam() {
      return Object.values(gameState.units).filter(unit => unit.team === 1)
    },
    blueTeam() {
      return Object.values(gameState.units).filter(unit => unit.team === 2)
    },
  },
  watch: {
    'gameState.logs': {
      handler(logs) {
        let audio
        let log = logs[logs.length - 1]
        switch (log.type) {
          case 'WeaponAttack':
            audio = new Audio(
              getRandomItem([
                require('@/assets/sounds/sword-impact-1.mp3'),
                require('@/assets/sounds/sword-impact-2.mp3'),
                require('@/assets/sounds/sword-impact-3.mp3'),
                require('@/assets/sounds/flesh-hit-1.mp3'),
                require('@/assets/sounds/flesh-hit-2.mp3'),
                require('@/assets/sounds/flesh-hit-3.mp3'),
                require('@/assets/sounds/flesh-hit-4.mp3'),
                require('@/assets/sounds/flesh-hit-5.mp3'),
                require('@/assets/sounds/flesh-hit-6.mp3'),
              ])
            )
            break
          case 'DefendAttack':
            switch (log.defenseType) {
              case BLOCK:
                audio = new Audio(
                  getRandomItem([
                    require('@/assets/sounds/blocked.mp3'),
                    require('@/assets/sounds/blocked-2.mp3'),
                    require('@/assets/sounds/blocked-3.mp3'),
                    require('@/assets/sounds/blocked-4.mp3'),
                    require('@/assets/sounds/blocked-6.mp3'),
                    require('@/assets/sounds/blocked-7.mp3'),
                    require('@/assets/sounds/sword-1.mp3'),
                    require('@/assets/sounds/sword-2.mp3'),
                    require('@/assets/sounds/pierce.mp3'),
                  ])
                )
                break
              case DODGE:
                audio = new Audio(
                  getRandomItem([
                    require('@/assets/sounds/dodge-1.mp3'),
                    require('@/assets/sounds/dodge-2.mp3'),
                    require('@/assets/sounds/dodge-3.mp3'),
                    require('@/assets/sounds/dodge-4.mp3'),
                    require('@/assets/sounds/dodge-5.mp3'),
                  ])
                )
                break
              case PARRY:
                audio = new Audio(
                  getRandomItem([
                    require('@/assets/sounds/parry.mp3'),
                    require('@/assets/sounds/parry-2.mp3'),
                    require('@/assets/sounds/parry-3.mp3'),
                    require('@/assets/sounds/parry-4.mp3'),
                  ])
                )
                break
            }
            break
          case 'UnitDies':
            switch (log.defender.team) {
              case 1:
                audio = new Audio(
                  getRandomItem([
                    require('@/assets/sounds/human-grunt-1.mp3'),
                    require('@/assets/sounds/human-grunt-2.mp3'),
                    require('@/assets/sounds/human-grunt-3.mp3'),
                    require('@/assets/sounds/human-grunt-4.mp3'),
                  ])
                )
                break
              case 2:
                audio = new Audio(
                  getRandomItem([
                    require('@/assets/sounds/goblin-dies.mp3'),
                    require('@/assets/sounds/goblin.mp3'),
                    require('@/assets/sounds/goblin-2.mp3'),
                    require('@/assets/sounds/goblin-3.mp3'),
                    require('@/assets/sounds/goblin-4.mp3'),
                    require('@/assets/sounds/goblin-5.mp3'),
                    require('@/assets/sounds/goblin-dies.mp3'),
                  ])
                )
                break
            }
            break
          case 'ArmorCondition':
            break
          case 'ArmorDefense':
            audio = new Audio(
              getRandomItem([
                require('@/assets/sounds/blocked.mp3'),
                require('@/assets/sounds/blocked-2.mp3'),
                require('@/assets/sounds/blocked-3.mp3'),
                require('@/assets/sounds/blocked-4.mp3'),
                require('@/assets/sounds/blocked-6.mp3'),
                require('@/assets/sounds/blocked-7.mp3'),
              ])
            )
            break
        }
        audio.play()
      },
    },
  },
  methods: {
    nextTick,
    selectUnit(unit) {
      this.selectedUnit = unit.key
    },
    isCurrentUnit(unit) {
      return unit.key === gameState.currentUnit
    },
    isCurrentTarget(unit) {
      return unit.key === gameState.currentTarget
    },
  },
  mounted() {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 32) {
        this.nextTick()
      }
    })
  },
}
</script>

<style lang="scss">
.log-container {
  overflow: auto;
  background: #1e1e1e;
  text-shadow: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  &::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
}
</style>
