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

- game/game.js nextTick() is where all the action happens
- `views/Combat.vue` is the View and `/combat` is the Route

### Initiative & Actions

Each unit has a number of actions that they can take per turn, and at the beginning of a turn they roll for initiative on each action.

### Morale

A unit's morale determines how likely they are to land a blow on an opponent. The number of morale points you have gives you the ability to roll with "advantage." In practice, you roll a die to hit for each morale point you have, and choose the highest of all the rolls.

### Damage

Landing a successful blow on an opponent is almost always a one-hit kill. Limbs can be destroyed or cut off. Armor has an added chance of deflecting a blow. Armor can be destroyed when deflecting a blow.