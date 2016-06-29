import Vue from 'vue'

export default {
  registerAllGlobalComponents () {
    Vue.component('alert', require('./Alert.vue'))
    // Vue.component('video-bg', require('vue-videobg'))
    // Vue.component('bounce-loader', require('vue-spinner/src/BounceLoader.vue'))
  }
}
