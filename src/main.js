import $ from 'jquery'
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueDependOn from 'vue-dependon'

import Components from 'components'
import Directives from 'directives'
import Filters from 'filters'

import Router from './router'
import App from './App.vue'

import '!style!css!tachyons/css/tachyons.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueDependOn)

Components.registerAllGlobalComponents()
Directives.registerAllGlobalDirectives()
Filters.registerAllGlobalFilters()

window.$ = $
window.noUiSlider = require('nouislider')

export const router = new VueRouter(Router)
export const eventBus = new Vue()

/* eslint-disable no-new */
window.vm = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
