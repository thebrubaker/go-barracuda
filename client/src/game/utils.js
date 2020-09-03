import { v4 as uuidv4 } from 'uuid'

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

export function generateKey() {
  return uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
}

export function distinctValues(items) {
  return [...new Set(items)]
}
