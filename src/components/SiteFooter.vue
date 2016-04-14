<template lang="jade">
  footer.vui-site-footer(role='contentinfo')
    .vui-container
      nav.vui-navigation--footer.vui-grid.vui-grid--align-center
        ul.vui-list--horizontal.vui-has-dividers--right
          li.vui-list__item
            a(v-link="{ name: 'privacy'}") Privacy Policy
          li.vui-list__item
            a(v-link="{ name: 'terms'}") Terms &amp; Conditions
          //- li.vui-list__item
          //-   a(href='#', @click.prevent='showRight = true') Page Info

      p
        | 3390 Peachtree Road, NE, Suite 400 Atlanta, GA 30326
        br
        | Copyright © 2014&ndash;{{ new Date().getFullYear() }} Videa. All rights reserved.
    div(v-if='$loadingRouteData')
      spinner(color='#276092', size='16px')
    sidebar(:show.sync='showRight', placement='right', header='Page Info', :width='350')
      h4.vui-text-heading--small Page Information
      div.aside-footer
        button.vui-button.vui-button--brand(type='button', @click='showRight=false') Close
</template>

<script>
  import store from '../store'
  import Sidebar from './Aside.vue'
  import Spinner from './BounceLoader.vue'

  export default {
    components: { Sidebar, Spinner },

    data () {
      return {
        sharedState: store.state,
        showRight: false
      }
    }
  }
</script>

<style lang="stylus">

  @import '../variables'
  .vui-text-heading--small
    color $vui-color-brand-8

  .vui-site-footer
    background-color $vui-color-brand-2
    background-color $vui-color-brand-4
    color white
    text-align center
    padding $spacing-medium

    .v-link-active
      color $vui-color-brand-6 !important
      // color $vui-color-brand-5 !important

  .vui-navigation--footer a
    color #fff
    text-decoration underline

</style>
