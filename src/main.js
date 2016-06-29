import $ from 'jquery'
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'
import VueDependOn from 'vue-dependon'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import selectize from 'selectize'
import VueSelectize from 'vue-selectize'

import Components from './components'
import Directives from './directives'
import Filters from './filters'
import Transitions from './transitions'

import Routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)
Vue.use(VueDependOn)
Vue.use(VueFire)
Vue.use(VueSelectize)

Components.registerAllGlobalComponents()
Directives.registerAllGlobalDirectives()
Filters.registerAllGlobalFilters()
Transitions.registerAllGlobalTransitions()

Vue.config.debug = false
Vue.config.warnExpressionErrors = false

export const Router = new VueRouter()

Router.map(Routes.routes)
Router.redirect(Routes.redirects)

Router.beforeEach(function () {
  window.scrollTo(0, 0)
})

window.$ = $
window.Vue = Vue
window.noUiSlider = require('nouislider')

window.Router = Router
Router.start(App, 'app')
