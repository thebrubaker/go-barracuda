import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Combat from '../views/combat/Combat.vue'
import Buildings from '../views/buildings/Buildings.vue'
import Party from '../views/party/Party.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      music: 'main',
    },
  },
  {
    path: '/combat',
    name: 'Combat',
    component: Combat,
    meta: {
      music: 'combat',
    },
  },
  {
    path: '/buildings',
    name: 'Buildings',
    component: Buildings,
  },
  {
    path: '/party',
    name: 'Party',
    component: Party,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

let musicTracks = {
  main: new Audio(require('@/assets/music/sammys-theme.mp3')),
  combat: new Audio(require('@/assets/music/combat.mp3')),
}

router.beforeEach((to, from, next) => {
  for (const [key, track] of Object.entries(musicTracks)) {
    if (key == to.meta.music) {
      track.play()
      track.volume = 0.4
    } else {
      track.volume = 0
    }
  }
  next()
})

export default router
