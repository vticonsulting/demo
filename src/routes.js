export default {
  routes: {
    '/': {
      name: 'home',
      component: require('./views/index.vue')
    }
  },
  redirects: {
    '*': '/'
  }
}
