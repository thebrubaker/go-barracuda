<template>
  <PageContainer>
    <PageHeader>
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          Combat Simulation
        </h1>
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <el-button
          @click="nextTick"
          class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md"
          >Next Tick</el-button
        >
      </div>
    </PageHeader>
    <el-row style="height: 45%">
      <el-col :span="12" class="border-gray-200 border-r h-full">
        <StackedList>
          <StackedListItem
            v-for="unit in redTeam"
            :class="{
              'current-unit': isCurrentUnit(unit),
              'current-target': isCurrentTarget(unit),
            }"
            :key="unit.key"
            :name="unit.name"
            :alive="unit.alive"
            :exhaustion="unit.exhaustion"
            :type="unit.type"
          />
        </StackedList>
      </el-col>
      <el-col :span="12">
        <StackedList>
          <StackedListItem
            v-for="unit in blueTeam"
            :class="{
              'current-unit': isCurrentUnit(unit),
              'current-target': isCurrentTarget(unit),
            }"
            :key="unit.key"
            :name="unit.name"
            :alive="unit.alive"
            :exhaustion="unit.exhaustion"
            :type="unit.type"
          />
        </StackedList>
      </el-col>
    </el-row>
    <el-row class="bg-gray-700 shadow-inner flex-1 overflow-scroll">
      <el-col
        class="log-container theme-dark flex flex-col justify-end px-4 py-2 text-sm h-full"
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
          <LogDestroyedBodyPart
            v-if="log.type === 'DestroyedBodyPart'"
            v-bind="log"
          ></LogDestroyedBodyPart>
          <LogDefendAttack
            v-if="log.type === 'DefendAttack'"
            v-bind="log"
          ></LogDefendAttack>
          <LogUnitDies
            v-if="log.type === 'UnitDies'"
            v-bind="log"
          ></LogUnitDies>
        </LogLine>
      </el-col>
    </el-row>
  </PageContainer>
</template>

<script>
// @ is an alias to /src
import PageContainer from '../components/PageContainer'
import PageHeader from '../components/PageHeader'
import StackedList from '../components/StackedList'
import StackedListItem from '../components/StackedListItem'
import LogLine from '../components/LogLine'
import LogWeaponAttack from '../components/LogWeaponAttack'
import LogDestroyedBodyPart from '../components/LogDestroyedBodyPart'
import LogDefendAttack from '../components/LogDefendAttack'
import LogUnitDies from '../components/LogUnitDies'
import { gameState, nextTick } from '../game/game'

export default {
  name: 'Home',
  components: {
    PageContainer,
    PageHeader,
    StackedList,
    StackedListItem,
    LogLine,
    LogWeaponAttack,
    LogDestroyedBodyPart,
    LogDefendAttack,
    LogUnitDies,
  },
  data() {
    return {
      gameState,
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
  methods: {
    nextTick,
    isCurrentUnit(unit) {
      return unit.key === gameState.currentUnit
    },
    isCurrentTarget(unit) {
      return unit.key === gameState.currentTarget
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
/*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 *
 * Ported for PrismJS by Marc Backes [@themarcba]
 */

.log-container.theme-bright {
  color: #f92aad;
  text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
  background-color: transparent !important;
  background-image: linear-gradient(to bottom, #2a2139 75%, #34294f);
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  white-space: normal;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #8e8e8e;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.number,
  .token.unit,
  .token.hexcode,
  .token.deleted {
    color: #e2777a;
  }

  .token.property,
  .token.selector {
    color: #72f1b8;
    text-shadow: 0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.selector .token.id,
  .token.function {
    color: #fdfdfd;
    text-shadow: 0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975,
      0 0 8px #03edf975;
  }

  .token.class-name {
    color: #fff5f6;
    text-shadow: 0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75,
      0 0 25px #fc1f2c75;
  }

  .token.constant,
  .token.symbol {
    color: #f92aad;
    text-shadow: 0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3;
  }

  .token.important,
  .token.atrule,
  .token.keyword,
  .token.selector .token.class,
  .token.builtin {
    color: #f4eee4;
    text-shadow: 0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #f87c32;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: #ce9178;
  }
}
</style>

<style lang="scss">
.log-container.theme-dark {
  overflow: auto;
  color: #d4d4d4;
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
  /*********************************************************
* Tokens
*/
  .namespace {
    opacity: 0.7;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6a9955;
  }

  .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #ce9178;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #d4d4d4;
    background: #1e1e1e;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #c586c0;
  }

  .token.function {
    color: #dcdcaa;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #d16969;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name {
    color: #4ec9b0;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value {
    color: #ce9178;
  }

  .token.entity {
    color: #4ec9b0;
    cursor: unset;
  }

  .token.namespace {
    color: #4ec9b0;
  }
}
</style>
