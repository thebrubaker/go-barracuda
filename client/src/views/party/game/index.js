import Vue from 'vue'

export const gameState = createGameState()

function createGameState() {
  const gameState = {
    turn: 1,
    step: 1,
    logs: [],
    currentUnit: null,
    currentTarget: null,
    units: {},
    initiativeOrder: [],
  }

  return Vue.observable(gameState)
}

export function nextTick() {
  return true
}
