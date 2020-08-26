<template>
  <div class="col-span-1 bg-white rounded-lg shadow">
    <div class="w-full flex items-center justify-between p-6 space-x-6">
      <div class="flex-1 truncate">
        <h3 class="text-gray-900 text-md leading-5 font-medium truncate">
          {{ name }}
        </h3>
        <p class="mt-2 text-gray-500 text-sm leading-5 truncate">
          {{ rooms }} Rooms
        </p>
        <div class="mt-2 flex items-center space-x-3">
          <span
            class="flex-shrink-0 inline-block px-2 py-0.5 text-indigo-800 text-xs leading-4 font-medium bg-indigo-100 rounded-full"
            >{{ material }} Building
          </span>
          <span
            class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs leading-4 font-medium bg-green-100 rounded-full"
            >{{ quality }} Quality
          </span>
        </div>
      </div>
      <div class="flex-shrink-0 bg-indigo-500 rounded-md p-3">
        <svg
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['name', 'quality', 'rooms', 'material'],
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
