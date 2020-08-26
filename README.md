# Go Barracuda

This repository is a playground for working on various game design concepts client-side. There is a Go server-side application to experiment with moving code to the backend.

`cd client && npm install && npm run serve`

## Technology

- Vue SPA Template from CLI
- [Element Components](https://element.eleme.io/#/en-US/component/installation)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)

## Combat Simulator

This is a turn-based combat simulator that pits two teams against one another.

- `game/game.js nextTick()` is where all the action happens
- `views/Combat.vue` is the View and `/combat` is the Route

### Initiative & Actions

Each unit has a number of actions that they can take per turn, and at the beginning of a turn they roll for initiative on each action.

### Exhaustion

Taking an action to attack or defend increases the unit's exhaustion. Once a unit is exhausted, they must rest during their turn. A unit is unable to defend themselves if they are too exhausted.

### Skill, Morale, Luck and Divine Favor

The succcess of a unit's action is determined by their skill, morale, luck and divine favor, such as landing a blow on an opponent or defending an attack. Skill and morale add / subtract points to the dice roll. Luck and Divine Favor add advantage / disadvantage to the roll.

### Armor, Quality and Condition

Landing a successful blow on an opponent's unarmored body or head is always a one-hit kill. Limbs can be destroyed or cut off. Armor has an added chance of deflecting a blow. Armor has a chance of degrading upon deflecting a blow. There are three tiers of armor condition: good, fair and worn. Once an armor is "worn" it no longer offers protection from blows. However, armor can be repaired to restore the condition (but only by 1 point from the lowest condition). The quality of the armor determines how likely a blow will degrade the condition of the armor. Low quality has a 1 in 3 chance to degrade. Legendary armor has a 1 in 100 chance to degrade. The type of armor also determines what types of damage it can block. If the armor receives a blow from a damage type it does not have resistance to, it is automatically degraded by one level.

### Feature Request

## Log Template Language

It should be easier to write log messages with syntax highlighting. Right now it would be hard for a server to write log messages without having to couple it to the HTML client. Instead we should write a template parser that converts a string into HTML with the appropriate classes.

Think of how Markdown works. The following templating language could be parsed into the appropriate HTML:

`[1.34] (COMBAT) *Neirin Aurelian* unleashed a flurry of attacks at *Goblin Fighter* with a _Large Spiked Hammer_ and **Slit** their __Upper Leg__.`

```html
<div class="text-white">
  <span class="text-gray-400">[1.34] </span>
  <span class="text-orange-300">COMBAT </span>
  <span class="text-yellow-100">Neirin Aurelian </span>
  <span class="">unleashed a flurry of attacks at </span>
  <span class="text-yellow-100">Goblin Fighter </span>
  <span class="">with a </span>
  <span class="text-orange-200">Large Spiked Hammer </span>
  <span class="">and </span>
  <span class="text-red-500">Slit </span>
  <span class="">their </span>
  <span class="text-blue-300">Upper Leg.</span>
</div>
```

## Armor
