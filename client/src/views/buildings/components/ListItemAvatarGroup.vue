<template>
  <div>
    <a
      href="#"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="px-4 py-4 flex items-center sm:px-6">
        <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="text-md leading-5 font-medium text-gray-700 truncate">
              {{ name }}
              <span class="text-sm ml-1 font-normal text-gray-500">
                {{ material }} Building
              </span>
            </div>
            <div class="mt-2 flex">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                  ></path>
                </svg>
                <span> {{ rooms }} {{ rooms > 1 ? 'Rooms' : 'Room' }} </span>
              </div>
            </div>
          </div>
          <div class="mt-4 flex-shrink-0 sm:mt-0">
            <div class="flex overflow-hidden">
              <img
                class="inline-block h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="ml-5 flex-shrink-0">
          <svg
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </a>
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
