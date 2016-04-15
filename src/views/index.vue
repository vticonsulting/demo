<template id="home" lang="jade">
  .home-view
    //- addon-input(id='foo', label='Testing')
</template>

<script>
  import store from '../store'
  import AddonInput from '../components/Input.vue'

  export default {
    components: { AddonInput },

    data () {
      return {
        sharedState: store.state
      }
    },

    created () {
      this.sharedState.activeApp = 'login'
    }
  }
</script>

<style lang="stylus" scoped>


</style>
