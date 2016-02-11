import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

Vue.config.debug = true
Vue.config.warnExpressionErrors = true

Vue.use(VueRouter)
export var Router = new VueRouter()

Router.map(routes.routes)
Router.redirect(routes.redirects)

window.Vue = Vue
window.Router = Router

Router.start(App, 'app')
