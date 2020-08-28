<template>
  <PageContainer id="buildings">
    <el-row>
      <div class="px-4 pt-4 pb-0 sm:flex sm:items-center sm:justify-between">
        <div class="flex-1 min-w-0">
          <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Buildings & Construction
          </h1>
        </div>
        <div class="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            class="el-button order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md el-button--default"
          >
            <!----><!----><span>Next Tick</span>
          </button>
        </div>
      </div>
      <el-tabs v-model="selectedTab">
        <el-tab-pane label="Buildings" name="buildings">
          <span
            slot="label"
            class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent text-sm leading-5"
            >Buildings
          </span>
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ListItemAvatarGroup
              v-for="building in buildings"
              :key="building.id"
              v-bind="building"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Houses" name="houses">
          <span
            slot="label"
            class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent text-sm leading-5"
            >Houses
          </span>
          <ListItemAvatarGroup
            v-for="house in houses"
            :key="house.id"
            v-bind="house"
          />
        </el-tab-pane>
        <el-tab-pane label="Agriculture" name="agriculture">
          <span
            slot="label"
            class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent text-sm leading-5"
            >Farms
          </span>
          <ListItemAvatarGroup
            v-for="farm in farms"
            :key="farm.id"
            v-bind="farm"
          />
        </el-tab-pane>
        <el-tab-pane label="Utilities" name="utilities"
          ><span
            slot="label"
            class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent text-sm leading-5"
            >Utilities
          </span>
          <ListItemAvatarGroup
            v-for="utility in utilities"
            :key="utility.id"
            v-bind="utility"
          />
        </el-tab-pane>
        <el-tab-pane label="Defenses" name="defenses"
          ><span
            slot="label"
            class="whitespace-no-wrap pb-4 px-1 border-b-2 border-transparent text-sm leading-5"
            >Defenses
          </span>
          <ListItemAvatarGroup
            v-for="defense in defenses"
            :key="defense.id"
            v-bind="defense"
          />
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </PageContainer>
</template>

<script>
// @ is an alias to /src
import PageContainer from '../../components/PageContainer'
import ListItemAvatarGroup from './components/ListItemAvatarGroup'

export default {
  name: 'Home',
  components: {
    PageContainer,
    ListItemAvatarGroup,
  },
  data() {
    return {
      selectedTab: 'buildings',
      currentRow: null,
      defenses: [
        {
          id: 1,
          name: 'Perimeter Wall',
          size: 35,
          material: 'Wood',
          quality: 'Poor',
        },
        {
          id: 2,
          name: 'Watchtower',
          size: 10,
          material: 'Wood',
          quality: 'Poor',
        },
      ],
      utilities: [
        {
          id: 1,
          name: 'Well',
          size: 5,
          material: 'Stone',
          quality: 'Good',
        },
        {
          id: 2,
          name: 'Windmill',
          size: 15,
          material: 'Wood',
          quality: 'Good',
        },
      ],
      houses: [
        {
          id: 1,
          name: 'Small House',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Good',
        },
        {
          id: 2,
          name: 'Hovel',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Poor',
        },
        {
          id: 3,
          name: 'Hovel',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Poor',
        },
        {
          id: 4,
          name: 'Hovel',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Poor',
        },
        {
          id: 5,
          name: 'Hovel',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Poor',
        },
      ],
      farms: [
        {
          id: 1,
          name: 'Orchard',
          size: 50,
        },
        {
          id: 2,
          name: 'Spring Farm',
          size: 250,
        },
        {
          id: 3,
          name: 'Autumn Farm',
          size: 250,
        },
        {
          id: 4,
          name: 'Barn',
          size: 25,
        },
      ],
      buildings: [
        {
          id: 1,
          name: 'Manor House',
          rooms: 15,
          size: 50,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 2,
          name: 'Blacksmith',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 3,
          name: 'Tannery',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 4,
          name: 'Bakehouse',
          rooms: 2,
          size: 15,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 5,
          name: 'Workshop',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 6,
          name: 'Temple',
          rooms: 6,
          size: 25,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 7,
          name: 'Barracks',
          rooms: 4,
          size: 25,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          id: 8,
          name: 'Tavern',
          rooms: 1,
          size: 20,
          material: 'Wood',
          quality: 'Normal',
        },
      ],
    }
  },
  computed: {},
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
#buildings {
  .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
  .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
  .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 14px;
  }
  .el-tabs__item {
    @apply text-gray-500 font-normal;
  }
  .el-tabs__item.is-active {
    color: #409eff;
  }
}
</style>
