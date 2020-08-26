<template>
  <PageContainer class="bg-cool-gray-100">
    <PageHeader>
      <div class="flex-1 min-w-0">
        <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">
          Buildings Playground
        </h1>
      </div>
      <div class="mt-4 flex sm:mt-0 sm:ml-4">
        <el-button class="order-0 sm:order-1 sm:ml-3 shadow-sm rounded-md"
          >New Construction</el-button
        >
      </div>
    </PageHeader>
    <el-row>
      <el-col :span="24" class="pr-8 pl-8 pt-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Large Buildings
        </h3>
        <el-row class="mt-5" :gutter="20">
          <el-col
            :span="8"
            v-for="construction in largeConstructions"
            :key="construction.key"
            class="mb-6"
          >
            <Card v-bind="construction" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="pr-8 pl-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Medium Buildings
        </h3>
        <el-row class="mt-5" :gutter="20">
          <el-col
            :span="8"
            v-for="construction in mediumConstructions"
            :key="construction.key"
            class="mb-6"
          >
            <Card v-bind="construction" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="pr-8 pl-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Small Buildings
        </h3>
        <el-row class="mt-5" :gutter="20">
          <el-col
            :span="8"
            v-for="construction in smallConstructions"
            :key="construction.key"
            class="mb-6"
          >
            <Card v-bind="construction" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- <el-row class="h-full">
      <el-col :span="24" class="p-8">
        <el-card shadow="hover">
          <el-table
            size="small"
            :data="tableData"
            style="width: 100%"
            highlight-current-row
            @current-change="handleCurrentChange"
          >
            <el-table-column prop="name" label="Name"> </el-table-column>
            <el-table-column prop="rooms" label="Rooms"></el-table-column>
            <el-table-column prop="size" label="Size"></el-table-column>
            <el-table-column prop="material" label="Material"></el-table-column>
            <el-table-column prop="quality" label="Quality"></el-table-column>
            <el-table-column fixed="right" label="Operations">
              <template>
                <div class="flex justify-end">
                  <el-button type="text" size="small">Detail</el-button>
                  <el-button type="text" size="small">Edit</el-button>
                </div>
              </template>
              <template slot="header">
                <div class="flex justify-end">
                  <el-button size="small">New Construction</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="mt-4 flex justify-start"
            small
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="50"
          >
          </el-pagination>
        </el-card>
      </el-col>
    </el-row> -->
  </PageContainer>
</template>

<script>
// @ is an alias to /src
import PageContainer from '../../components/PageContainer'
import PageHeader from '../../components/PageHeader'
import Card from './components/Card'

export default {
  name: 'Home',
  components: {
    PageContainer,
    PageHeader,
    Card,
  },
  data() {
    return {
      currentRow: null,
      constructions: [
        {
          name: 'Barn',
          rooms: 1,
          size: 15,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Manor House',
          rooms: 15,
          size: 50,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Blacksmith',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Tannery',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Bakehouse',
          rooms: 2,
          size: 15,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Workshop',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Temple',
          rooms: 6,
          size: 25,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Barracks',
          rooms: 4,
          size: 25,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Alchemist',
          rooms: 2,
          size: 10,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Tavern',
          rooms: 1,
          size: 20,
          material: 'Wood',
          quality: 'Normal',
        },
        {
          name: 'Hovel',
          rooms: 1,
          size: 5,
          material: 'Wood',
          quality: 'Poor',
        },
      ],
    }
  },
  computed: {
    largeConstructions() {
      return this.constructions.filter(construction => construction.size >= 20)
    },
    mediumConstructions() {
      return this.constructions.filter(
        construction => construction.size >= 10 && construction.size < 20
      )
    },
    smallConstructions() {
      return this.constructions.filter(construction => construction.size < 10)
    },
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val
    },
  },
  mounted() {},
}
</script>

<style lang="scss"></style>
