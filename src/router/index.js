import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '@/views/Profile.vue'
import EventCreate from '@/views/EventCreate.vue'
import Events from '@/views/EventList.vue'
import Event from '@/views/EventShow.vue'

import Messages from '@/views/MessageList.vue'
import Message from '@/views/MessageShow.vue'

import NProgress from 'nprogress'
import store from '@/store/store'
import NotFound from '@/views/NotFound.vue'
import NetworkIssue from '@/views/NetworkIssue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/events',
    name: 'events-list',
    component: Events,
    props: true,
  },
  {
    path: '/events/create',
    name: 'create-event',
    component: EventCreate,
  },
  {
    path: '/events/:id',
    name: 'event',
    component: Event,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({name: '404', params: {resource: 'event'}})
          } else {
            next({name: 'network-issue'})
          }
        })
    },
  },
  {
    path: '/messages',
    name: 'messages-list',
    component: Messages,
    props: true,
  },
  {
    path: '/messages/:id',
    name: 'message',
    component: Message,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('message/fetchMessage', routeTo.params.id)
        .then(message => {
          routeTo.params.message = message
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({name: '404', params: {resource: 'message'}})
          } else {
            next({name: 'network-issue'})
          }
        })
    },
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue,
  },
  {
    path: '*',
    redirect: {name: '404', params: {resource: 'page'}},
    // redirect: '/about',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
