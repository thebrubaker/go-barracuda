<template>
  <PageContainer class="flex flex-col">
    <PageHeader>
      <div class="flex-1 min-w-0">
        <h1 class="text-sm font-medium leading-6 text-gray-300 sm:truncate">
          Party Simulator
        </h1>
        <small class="text-gray-400 text-lg">Goblin Smashers</small>
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <el-button class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md"
          >Next Tick</el-button
        >
      </div>
    </PageHeader>
    <el-row class="h-96 border-gray-200 border-b">
      <el-col
        class="border-gray-200 border-r h-full p-4 overflow-y-auto"
        :span="14"
      >
        <div>
          <UnitRow
            v-for="unit in units"
            :key="unit.key"
            :unit="unit"
            :selected="false"
          />
        </div>
      </el-col>
      <el-col class="h-full p-4 overflow-y-auto" :span="8"
        ><h2>Resources</h2></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24" class="h-full p-4">
        <el-row>
          <h2>Party Settings</h2>
        </el-row>
        <el-row class="mt-2">
          <el-col :span="8">
            <el-row :gutter="10">
              <el-col :span="24" class="mb-2">
                <label class="text-sm text-cool-gray-400">Weapons</label>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  multiple
                  collapse-tags
                  v-model="weapon.qualityTypes"
                  placeholder="Quality"
                >
                  <el-option
                    v-for="type in qualityTypes"
                    :key="type.name"
                    :label="type.name"
                    :value="type.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  v-model="weapon.materialTypes"
                  multiple
                  collapse-tags
                  placeholder="Materials"
                >
                  <el-option
                    v-for="type in materialTypes"
                    :key="type"
                    :label="type"
                    :value="type"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="24">
                <el-select
                  size="mini"
                  v-model="weapon.types"
                  multiple
                  placeholder="Weapon Types"
                  class="w-full mt-3"
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
            </el-row>
            <el-divider class="mt-4 mb-2"></el-divider>
            <el-row :gutter="10">
              <el-col :span="24" class="mb-2">
                <label class="text-sm text-cool-gray-400">Armor</label>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  multiple
                  collapse-tags
                  v-model="armor.qualityTypes"
                  placeholder="Quality"
                >
                  <el-option
                    v-for="type in qualityTypes"
                    :key="type.name"
                    :label="type.name"
                    :value="type.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  v-model="armor.conditionTypes"
                  multiple
                  collapse-tags
                  placeholder="Condition"
                >
                  <el-option
                    v-for="type in conditionTypes"
                    :key="type.name"
                    :label="type.name"
                    :value="type.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="24">
                <el-select
                  size="mini"
                  v-model="armor.types"
                  multiple
                  placeholder="Armor Types"
                  class="w-full mt-3"
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
            </el-row>
            <el-divider class="mt-4 mb-2"></el-divider>
            <el-row :gutter="10">
              <el-col :span="24" class="mb-2">
                <label class="text-sm text-cool-gray-400">Shields</label>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  multiple
                  collapse-tags
                  v-model="shield.qualityTypes"
                  placeholder="Quality"
                >
                  <el-option
                    v-for="type in qualityTypes"
                    :key="type.name"
                    :label="type.name"
                    :value="type.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="12">
                <el-select
                  size="mini"
                  v-model="shield.materialTypes"
                  multiple
                  collapse-tags
                  placeholder="Materials"
                >
                  <el-option
                    v-for="type in materialTypes"
                    :key="type"
                    :label="type"
                    :value="type"
                  >
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="24">
                <el-select
                  size="mini"
                  v-model="shield.types"
                  multiple
                  collapse-tags
                  placeholder="Shield Types"
                  class="w-full mt-3"
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
          </el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
        </el-row>
      </el-col>
    </el-row>
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

<style lang="scss"></style>
