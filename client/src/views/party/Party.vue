<template>
  <PageContainer id="party" class="flex flex-col h-full bg-gray-100">
    <PageHeader class="bg-white">
      <div class="flex-1 min-w-0">
        <h1 class="text-sm font-medium leading-6 text-gray-400 sm:truncate">
          Party Simulator
        </h1>
        <small class="text-gray-600 text-lg">Goblin Smashers</small>
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <el-button class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md"
          >Next Tick</el-button
        >
      </div>
    </PageHeader>
    <div class="flex flex-col h-full">
      <el-row :gutter="20" class="flex-1 p-4 pb-0">
        <el-col class="overflow-y-auto h-full" :span="16">
          <el-card :body-style="{ padding: 0 }" shadow="none" class="h-full">
            <div slot="header" class="clearfix">
              <span>Members</span>
              <el-button style="float: right; padding: 3px 0" type="text">
                Add Unit
              </el-button>
            </div>
            <UnitRow
              v-for="unit in units"
              :key="unit.key"
              :unit="unit"
              :selected="false"
            />
          </el-card>
        </el-col>
        <el-col class="overflow-y-auto h-full bg-gray-100" :span="8">
          <el-card :body-style="{ padding: 0 }" shadow="none" class="h-full">
            <div slot="header" class="clearfix">
              <span>Supplies</span>
            </div>
            <div class="p-4">
              <el-card
                v-for="resource in supplies"
                :key="resource.type"
                :body-style="{ padding: '10px 20px' }"
                shadow="hover"
                class="mb-2 shadow-sm"
              >
                <div
                  class="flex justify-between text-cool-gray-700 text-sm cursor-pointer"
                >
                  <div class="">{{ resource.type }}</div>
                  <div class="text-md">
                    {{ resource.count }}
                    <span class="text-cool-gray-500 text-xs">
                      / {{ resource.target }}</span
                    >
                  </div>
                </div>
              </el-card>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="p-4">
        <el-card
          :body-style="{ padding: 0 }"
          shadow="none"
          class="h-full"
          style="height: 450px;"
        >
          <div slot="header" class="clearfix">
            <span>Party Settings</span>
          </div>
          <div class="p-4">
            <el-tabs tab-position="left">
              <el-tab-pane label="Equipment">
                <el-row :gutter="20" class="p-4 pt-0">
                  <el-col :span="8">
                    <div class="text-md text-cool-gray-500 mb-2">Weapons</div>
                    <div class="text-sm text-cool-gray-800 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      v-model="weapon.qualityTypes"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.value"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">Materials</div>
                    <el-select
                      size="medium"
                      v-model="weapon.materialTypes"
                      multiple
                      placeholder="Materials"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in materialTypes"
                        :key="type"
                        :label="type"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">
                      Weapon Types
                    </div>
                    <el-select
                      size="medium"
                      v-model="weapon.types"
                      multiple
                      placeholder="Weapon Types"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in weaponTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.name"
                      >
                      </el-option>
                    </el-select>
                  </el-col>

                  <el-col :span="8">
                    <div class="text-md text-cool-gray-500 mb-2">Armor</div>
                    <div class="text-sm text-cool-gray-800 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      v-model="armor.qualityTypes"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.value"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">Condition</div>
                    <el-select
                      size="medium"
                      v-model="armor.conditionTypes"
                      multiple
                      placeholder="Condition"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in conditionTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.value"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">
                      Armor Types
                    </div>
                    <el-select
                      size="medium"
                      v-model="armor.types"
                      multiple
                      placeholder="Armor Types"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in armorTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.value"
                      >
                      </el-option>
                    </el-select>
                  </el-col>

                  <el-col :span="8">
                    <div class="text-md text-cool-gray-500 mb-2">Shields</div>
                    <div class="text-sm text-cool-gray-800 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      v-model="shield.qualityTypes"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type.name"
                        :label="type.name"
                        :value="type.value"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">Materials</div>

                    <el-select
                      size="medium"
                      v-model="shield.materialTypes"
                      multiple
                      placeholder="Materials"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in materialTypes"
                        :key="type"
                        :label="type"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-cool-gray-800 mb-1">
                      Shield Types
                    </div>

                    <el-select
                      size="medium"
                      v-model="shield.types"
                      multiple
                      placeholder="Shield Types"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in shieldTypes"
                        :key="type"
                        :label="type"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </el-tab-pane>

              <el-tab-pane label="Tactics">
                <el-row :gutter="20" class="p-4 pt-0">
                  <el-col :span="18" class="relative">
                    <el-dropdown
                      class="absolute top-2 right-6 cursor-pointer z-10"
                    >
                      <span>
                        Add Tactic<i
                          class="el-icon-arrow-down el-icon--right"
                        ></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                          v-for="type in tacticTypes"
                          :key="type"
                          >{{ type }}</el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-tabs v-model="activeTacticsTab">
                      <el-tab-pane label="Full Stamina" name="first">
                        <div
                          v-for="tactic in tactics.full"
                          :key="tactic.type"
                          class="flex justify-between align-middle pb-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ tactic.type }}
                          </div>
                          <el-input-number
                            v-model="tactic.count"
                            controls-position="right"
                            size="mini"
                            :min="0"
                            :max="100"
                          ></el-input-number>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="75% Stamina" name="second">
                        <div
                          v-for="tactic in tactics.quarter"
                          :key="tactic.type"
                          class="flex justify-between align-middle pb-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ tactic.type }}
                          </div>
                          <el-input-number
                            v-model="tactic.count"
                            controls-position="right"
                            size="mini"
                            :min="0"
                            :max="100"
                          >
                          </el-input-number>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="50% Stamina" name="third">
                        <div
                          v-for="tactic in tactics.half"
                          :key="tactic.type"
                          class="flex justify-between align-middle pb-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ tactic.type }}
                          </div>
                          <el-input-number
                            v-model="tactic.count"
                            controls-position="right"
                            size="mini"
                            :min="0"
                            :max="100"
                          ></el-input-number></div
                      ></el-tab-pane>
                      <el-tab-pane label="25% Stamina" name="fourth">
                        <div
                          v-for="tactic in tactics.threeQuarter"
                          :key="tactic.type"
                          class="flex justify-between align-middle pb-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ tactic.type }}
                          </div>
                          <el-input-number
                            v-model="tactic.count"
                            controls-position="right"
                            size="mini"
                            :min="0"
                            :max="100"
                          ></el-input-number></div
                      ></el-tab-pane>
                      <el-tab-pane label="0% Stamina" name="fifth">
                        <div
                          v-for="tactic in tactics.empty"
                          :key="tactic.type"
                          class="flex justify-between align-middle py-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ tactic.type }}
                          </div>
                          <el-input-number
                            v-model="tactic.count"
                            controls-position="right"
                            size="mini"
                            :min="0"
                            :max="100"
                          ></el-input-number></div
                      ></el-tab-pane>
                    </el-tabs>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="Training">Role</el-tab-pane>
              <el-tab-pane label="Assignments">Task</el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-row>
    </div>
  </PageContainer>
</template>

<script>
// @ is an alias to /src
import PageContainer from '../../components/PageContainer'
import PageHeader from '../../components/PageHeader'
import UnitRow from './components/UnitRow'
import { gameState } from '@/game'
import { WarHammer, GreatAxe, Spear, Mace, Sword, Dagger } from '@/game/weapons'
import {
  ARMOR_TYPE_LEATHER,
  ARMOR_TYPE_CHAINMAIL,
  ARMOR_TYPE_PLATE,
  QUALITY_LOW,
  QUALITY_NORMAL,
  QUALITY_HIGH,
  QUALITY_LEGENDARY,
  CONDITION_WORN,
  CONDITION_FAIR,
  CONDITION_GOOD,
} from '@/game/armor'

export default {
  name: 'Home',
  components: {
    PageContainer,
    PageHeader,
    UnitRow,
  },
  data() {
    return {
      gameState,
      activeTacticsTab: 'first',
      num: 20,
      supplies: [
        {
          type: 'Food',
          count: 40,
          target: 40,
        },
        {
          type: 'Water',
          count: 40,
          target: 40,
        },
        {
          type: 'Tents',
          count: 7,
          target: 15,
        },
        {
          type: 'Wagons',
          count: 2,
          target: 2,
        },
        {
          type: 'Cages',
          count: 3,
          target: 5,
        },
      ],
      tactics: {
        full: [
          {
            type: 'Strong Attack',
            count: 5,
          },
          {
            type: 'Wild Attack',
            count: 5,
          },
          {
            type: 'Normal Attack',
            count: 2,
          },
          {
            type: 'Quick Attack',
            count: 2,
          },
        ],
        threeQuarter: [
          {
            type: 'Defensive Stance',
            count: 4,
          },
          {
            type: 'Recover',
            count: 3,
          },
          {
            type: 'Rally',
            count: 2,
          },
        ],
        half: [
          {
            type: 'Quick Attack',
            count: 4,
          },
          {
            type: 'Counter Attack',
            count: 3,
          },
          {
            type: 'Defensive Stance',
            count: 2,
          },
        ],
        quarter: [
          {
            type: 'Strong Attack',
            count: 2,
          },
          {
            type: 'Quick Attack',
            count: 3,
          },
          {
            type: 'Normal Attack',
            count: 4,
          },
        ],
        empty: [
          {
            type: 'Recover',
            count: 3,
          },
        ],
      },
      tacticTypes: [
        'Normal Attack',
        'Strong Attack',
        'Quick Attack',
        'Counter Attack',
        'Wild Attack',
        'Defensive Stance',
        'Recover',
        'Rally',
      ],
      attackTypes: [
        {
          name: 'Strong Attack',
          value: 1,
        },
      ],
      qualityTypes: [
        { name: 'Low Quality', value: QUALITY_LOW },
        { name: 'Normal Quality', value: QUALITY_NORMAL },
        { name: 'High Quality', value: QUALITY_HIGH },
        { name: 'Legendary Quality', value: QUALITY_LEGENDARY },
      ],
      materialTypes: ['Wood', 'Stone', 'Iron', 'Steel'],
      weaponTypes: [WarHammer, GreatAxe, Spear, Mace, Sword, Dagger],
      conditionTypes: [
        {
          name: 'Worn Condition',
          value: CONDITION_WORN,
        },
        {
          name: 'Fair Condition',
          value: CONDITION_FAIR,
        },
        {
          name: 'Good Condition',
          value: CONDITION_GOOD,
        },
      ],
      armorTypes: [
        { name: ARMOR_TYPE_LEATHER.name, value: ARMOR_TYPE_LEATHER.name },
        { name: ARMOR_TYPE_CHAINMAIL.name, value: ARMOR_TYPE_CHAINMAIL.name },
        { name: ARMOR_TYPE_PLATE.name, value: ARMOR_TYPE_PLATE.name },
      ],
      shieldTypes: ['Buckler', 'Kite', 'Tower'],
      weapon: {
        qualityTypes: [QUALITY_HIGH, QUALITY_LOW, QUALITY_NORMAL],
        materialTypes: ['Wood', 'Stone', 'Iron', 'Steel'],
        types: [Spear.name, Mace.name, Sword.name],
      },
      armor: {
        qualityTypes: [QUALITY_HIGH, QUALITY_LOW, QUALITY_NORMAL],
        conditionTypes: [CONDITION_GOOD, CONDITION_FAIR],
        types: [ARMOR_TYPE_LEATHER.name, ARMOR_TYPE_CHAINMAIL.name],
      },
      shield: {
        qualityTypes: [QUALITY_HIGH, QUALITY_LOW, QUALITY_NORMAL],
        materialTypes: ['Wood', 'Stone', 'Iron', 'Steel'],
        types: ['Buckler', 'Kite', 'Tower'],
      },
    }
  },
  computed: {
    units() {
      return gameState.parties[1].units.map(key => gameState.units[key])
    },
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
#party {
  .el-tabs__item {
    @apply text-cool-gray-500 text-xs;
    &.is-active {
      color: #409eff;
    }
  }
  .el-input-number--mini {
    width: 85px;
  }
  .el-tabs__nav {
    // display: flex;
    // width: 100%;
    // justify-content: space-between;
  }
}
</style>
