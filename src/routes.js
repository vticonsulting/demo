export default {
  routes: {
    '/': {
      name: 'home',
      component: require('./views/index.vue')
    },
    '/privacy': {
      name: 'privacy',
      component: require('./views/privacy.vue')
    },
    '/terms': {
      name: 'terms',
      component: require('./views/terms.vue')
    }
  },
  redirects: {
    '*': '/'
  }
}
