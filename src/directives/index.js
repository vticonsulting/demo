import Vue from 'vue'

export default {
  registerAllGlobalDirectives () {
    Vue.directive('confirm', require('./confirm'))
    Vue.directive('focus', require('./focus'))
  }
}
