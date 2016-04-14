import Vue from 'vue'

export default {
  registerAllGlobalDirectives () {
    Vue.directive('confirm', require('./confirm'))
    Vue.directive('datepicker', require('./datepicker'))
    Vue.directive('focus', require('./focus'))
  }
}
