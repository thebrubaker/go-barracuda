export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}
