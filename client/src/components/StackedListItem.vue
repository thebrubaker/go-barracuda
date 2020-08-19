<template>
  <li>
    <a
      href="#"
      class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
    >
      <div class="px-4 py-2 flex items-center">
        <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <div class="flex">
              <div class="flex items-center text-sm leading-5 text-gray-500">
                <div
                  class="inline-block h-6 w-6 text-white shadow-solid mr-1.5"
                >
                  <img
                    style="object-position: -6px -4px test"
                    :src="require(`@/assets/${types[type]}`)"
                    alt=""
                  />
                </div>
                <span>
                  {{ name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex-shrink-0"
          v-for="(_, index) in fullActionPoints"
          :key="index"
        >
          <svg
            class="h-5 w-5 text-blue-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          class="flex-shrink-0"
          v-for="(_, index) in emptyActionPoints"
          :key="index + 5"
        >
          <svg
            class="h-5 w-5 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      required: true,
      type: String,
    },
    actionPoints: {
      required: true,
      type: Number,
    },
    type: {
      required: true,
      type: String,
    },
  },
  computed: {
    fullActionPoints() {
      return [...Array(this.actionPoints)]
    },
    emptyActionPoints() {
      return [...Array(5 - this.actionPoints)]
    },
  },
  data() {
    return {
      types: {
        HumanFighter: 'Brigand.png',
        GoblinMelee: 'Goblin_Melee.png',
        GoblinRanged: 'Goblin_Range.png',
        GoblinLeader: 'Goblin_Mage.png',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss"></style>
