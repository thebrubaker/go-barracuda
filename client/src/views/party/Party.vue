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
        <el-button class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md">
          Next Tick
        </el-button>
      </div>
    </PageHeader>
    <div class="flex flex-col h-full">
      <el-row :gutter="20" class="flex-1 p-4 pb-0">
        <el-col class="overflow-y-auto h-full" :span="16">
          <el-card :body-style="{ padding: 0 }" shadow="none" class="h-full">
            <div slot="header" class="flex justify-between">
              <span>Members</span>
              <el-dropdown class="">
                <el-button>
                  Add Unit<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-if="!availableUnits.length" disabled
                    >No Units Available</el-dropdown-item
                  >
                  <el-dropdown-item
                    v-for="unit in availableUnits"
                    :key="unit.key"
                    @click="addUnitToGroup(unit.key)"
                    >{{ unit.name }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <UnitRow
              v-for="unit in groupUnits"
              :key="unit.key"
              :unit="unit"
              :selected="false"
            />
          </el-card>
        </el-col>
        <el-col class="overflow-y-auto h-full bg-gray-100" :span="8">
          <el-card :body-style="{ padding: 0 }" shadow="none" class="h-full">
            <div slot="header" class="flex justify-between">
              <span>Supplies</span>
              <el-dropdown class="">
                <el-button>
                  Add Resource<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-if="!availableSupplies.length" disabled
                    >No Resources Available</el-dropdown-item
                  >
                  <el-dropdown-item
                    v-for="resource in availableSupplies"
                    :key="resource"
                    @click.native="increaseResourceTarget(groupKey, resource)"
                    >{{ getConstantName(resource) }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="p-4">
              <el-card
                v-for="resource in groupSupplies.sort()"
                :key="resource.type"
                :body-style="{ padding: '10px 20px' }"
                shadow="hover"
                class="mb-2 shadow-sm"
              >
                <div
                  class="flex justify-between text-cool-gray-700 text-sm cursor-pointer"
                >
                  <div class="flex align-middle">
                    <img
                      class="w-6 h-6 mr-4"
                      :src="getIcon(resource.key)"
                      :alt="getConstantName(resource.key)"
                    />
                    {{ getConstantName(resource.key) }}
                  </div>
                  <div class="flex-1 flex justify-end align-middle">
                    <div class="text-md">
                      {{ resource.count }}
                      <span class="text-cool-gray-500 text-xs">
                        / {{ resource.target }}
                      </span>
                    </div>
                    <div class="relative w-4 h-6 ml-4">
                      <i
                        class="el-icon-arrow-up text-xs top-0 absolute cursor-pointer hover:text-blue-600 hover:font-bold"
                        @click="increaseResourceTarget(groupKey, resource.key)"
                      ></i>
                      <i
                        class="el-icon-arrow-down text-xs bottom-0 absolute cursor-pointer hover:font-bold"
                        @click="decreaseResourceTarget(groupKey, resource.key)"
                      ></i>
                    </div>
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
          style="height: 360px;"
        >
          <div slot="header" class="clearfix">
            <span>Party Settings</span>
          </div>
          <div class="p-4">
            <el-tabs tab-position="left" v-model="activeSettingsTab">
              <el-tab-pane label="Equipment" name="equipment">
                <el-row :gutter="20" class="p-4 pt-0">
                  <el-col :span="8">
                    <div
                      class="text-lg leading-6 font-medium text-gray-900 mb-2"
                    >
                      Weapons
                    </div>
                    <div class="text-sm text-gray-500 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.weaponQuality"
                      @change="types => setWeaponQuality(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">Materials</div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.weaponMaterials"
                      @change="types => setWeaponMaterials(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in materialTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">
                      Weapon Types
                    </div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.weaponTypes"
                      @change="types => setWeaponTypes(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in weaponTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                  </el-col>

                  <el-col :span="8">
                    <div
                      class="text-lg leading-6 font-medium text-gray-900 mb-2"
                    >
                      Armor
                    </div>
                    <div class="text-sm text-gray-500 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.armorQuality"
                      @change="types => setArmorQuality(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">Condition</div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.armorCondition"
                      @change="types => setArmorCondition(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in conditionTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">
                      Armor Types
                    </div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.armorTypes"
                      @change="types => setArmorTypes(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in armorTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                  </el-col>

                  <el-col :span="8">
                    <div
                      class="text-lg leading-6 font-medium text-gray-900 mb-2"
                    >
                      Shields
                    </div>
                    <div class="text-sm text-gray-500 mb-1">Quality</div>
                    <el-select
                      size="medium"
                      multiple
                      :value="group.shieldQuality"
                      @change="types => setShieldQuality(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in qualityTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">Materials</div>

                    <el-select
                      size="medium"
                      multiple
                      :value="group.shieldMaterials"
                      @change="types => setWeaponMaterials(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in materialTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                    <div class="text-sm text-gray-500 mb-1">
                      Shield Types
                    </div>

                    <el-select
                      size="medium"
                      multiple
                      :value="group.shieldTypes"
                      @change="types => setShieldTypes(groupKey, types)"
                      placeholder="Quality"
                      class="w-full mb-3"
                    >
                      <el-option
                        v-for="type in shieldTypes"
                        :key="type"
                        :label="getConstantName(type)"
                        :value="type"
                      >
                      </el-option>
                    </el-select>
                  </el-col>
                </el-row>
              </el-tab-pane>

              <el-tab-pane label="Tactics" name="tactics">
                <el-row :gutter="20" class="p-4 pt-0">
                  <el-col :span="15" class="relative">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Tactics
                    </h3>
                    <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                      <p>
                        Configure the priority of each tactic for the selected
                        stamina of the unit.
                      </p>
                    </div>
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
                          v-for="tactic in tacticTypes"
                          :key="tactic"
                          @click.native="
                            increaseTactic(groupKey, activeTacticsTab, tactic)
                          "
                          >{{ getConstantName(tactic) }}</el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-tabs v-model="activeTacticsTab">
                      <el-tab-pane
                        v-for="(tactics, staminaKey) in group.tactics"
                        :key="staminaKey"
                        :label="getConstantName(staminaKey)"
                        :name="staminaKey"
                      >
                        <div
                          v-for="tactic in getDistinct(tactics).sort()"
                          :key="tactic"
                          class="flex justify-between align-middle pb-2"
                        >
                          <div
                            class="flex align-middle text-sm leading-loose text-cool-gray-700"
                          >
                            {{ getConstantName(tactic) }}
                          </div>
                          <div class="flex align-middle justify-between">
                            <div>
                              {{ getRatio(tactic, tactics) | toPercentage }}
                            </div>
                            <div class="relative w-4 h-6 ml-4">
                              <i
                                class="el-icon-arrow-up text-xs top-0 absolute cursor-pointer hover:text-blue-600 hover:font-bold"
                                @click="
                                  increaseTactic(groupKey, staminaKey, tactic)
                                "
                              ></i>
                              <i
                                class="el-icon-arrow-down text-xs bottom-0 absolute cursor-pointer hover:font-bold"
                                @click="
                                  decreaseTactic(groupKey, staminaKey, tactic)
                                "
                              ></i>
                            </div>
                          </div>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="Training" name="training"></el-tab-pane>
              <el-tab-pane label="Assignments" name="assignments"></el-tab-pane>
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
import { gameState } from '../../game'
import {
  unitGroupState,
  addUnitToGroup,
  increaseResourceTarget,
  decreaseResourceTarget,
  setWeaponQuality,
  setWeaponTypes,
  setWeaponMaterials,
  setShieldQuality,
  setShieldTypes,
  setShieldMaterials,
  setArmorQuality,
  setArmorTypes,
  setArmorCondition,
  increaseTactic,
  decreaseTactic,
} from '../../game/unit-group'
import { getIcon } from '../../utils/assets'
import {
  conditionTypes,
  qualityTypes,
  armorTypes,
  shieldTypes,
  weaponTypes,
  materialTypes,
  resourceTypes,
  tacticTypes,
  getConstantName,
  STAMINA_FULL,
} from '../../utils/constants'

export default {
  name: 'Home',
  components: {
    PageContainer,
    PageHeader,
    UnitRow,
  },
  filters: {
    toPercentage(value) {
      if (!value) {
        return '0%'
      }

      return (value * 100).toFixed(0) + '%'
    },
  },
  data() {
    return {
      gameState,
      unitGroupState,
      activeSettingsTab: 'equipment',
      activeTacticsTab: STAMINA_FULL,
      qualityTypes,
      armorTypes,
      conditionTypes,
      shieldTypes,
      weaponTypes,
      materialTypes,
      resourceTypes,
      tacticTypes,
    }
  },
  computed: {
    groupKey() {
      return Object.keys(unitGroupState.group)[0]
    },
    group() {
      return unitGroupState.group[this.groupKey]
    },
    groupUnits() {
      return this.group
        ? this.group.unitKeys.map(key => gameState.units[key])
        : []
    },
    allUnits() {
      return Object.values(gameState.units).filter(unit => unit.team === 1)
    },
    availableUnits() {
      return this.allUnits.filter(unit => !this.groupUnits.includes(unit))
    },
    groupSupplies() {
      return this.group ? Object.values(this.group.supplies) : []
    },
    supplyKeys() {
      return this.groupSupplies.map(resource => resource.key)
    },
    availableSupplies() {
      return resourceTypes.filter(key => !this.supplyKeys.includes(key))
    },
  },
  methods: {
    addUnitToGroup,
    increaseResourceTarget,
    decreaseResourceTarget,
    setWeaponQuality,
    setWeaponTypes,
    setWeaponMaterials,
    setShieldQuality,
    setShieldTypes,
    setShieldMaterials,
    setArmorQuality,
    setArmorTypes,
    setArmorCondition,
    increaseTactic,
    decreaseTactic,
    getIcon,
    getConstantName,
    getDistinct(items) {
      return [...new Set(items)]
    },
    getRatio(item, items) {
      return items.filter(i => i === item).length / items.length
    },
  },
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
