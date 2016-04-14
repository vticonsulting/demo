import Vue from 'vue'

export default {
  registerAllGlobalComponents () {
    Vue.component('alert', require('./Alert.vue'))
  }
}
