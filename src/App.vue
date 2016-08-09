<template lang="jade">
  #app(@click='closeDropdownsAndPopovers()')
    site-header
    site-navigation
    main.vui-main(:class="{ 'vui-main--login': sharedState.activeApp == 'login' }")
      router-view
    site-footer
    //- site-help
    .vui-site-help(@click.prevent='showRight = true', style='cursor: pointer')
      //- h2.vui-text-heading--medium Need Help?
      a.vui-text-heading--medium(href='#', @click.prevent='', style='font-size: 1em; color: white') Need Help?
    sidebar(:show.sync='showRight', placement='right', header='Need Help?', :width='750')
      h4.vui-text-heading--large.vui-m-bottom--large Contact Us

      //- h3.vui-text-heading--medium.vui-m-bottom--small Knowledge Base
      //- .vui-grid.vui-m-bottom--x-large
      //-   p.vui-align-middle(style='width: 50%') Many questions our customers have can be answered in the Videa knowledge base. We recommend checking here first.
      //-   form.vui-form--inline.vui-align-middle(style='width: 50%')
      //-     fieldset.vui-form-element
      //-       .vui-form-element__control
      //-         input.vui-input(type='text')
      //-     fieldset.vui-form-element
      //-       button.vui-button.vui-button--brand Search
      ul.vui-grid.vui-grid--pull-padded.vui-m-bottom--large
        li.vui-grid.vui-grid--align-spread.vui-grid--vertical.vui-col--padded(style='width: 50%')
          .vui-grid.vui-m-bottom--small
            h3.vui-align-middle.vui-text-heading--medium.vui-m-right--small Call Us
            icon.vui-align-middle(name='phone')
          .vui-m-bottom--medium.vui-grow
            p We are available 08:00AM&mdash;11:00PM EST, Monday&mdash;Friday. Customer Service 844-48VIDEA
          .vui-m-bottom--large
            button.vui-button.vui-button--secondary Call Us
        li.vui-grid.vui-grid--align-spread.vui-grid--vertical.vui-col--padded(style='width: 50%')
          .vui-grid.vui-m-bottom--small
            h3.vui-text-heading--medium.vui-align-middle.vui-m-right--small Email Us
            icon.vui-align-middle(name='envelope')
          .vui-m-bottom--medium
            p Technical Support <a href="mailto:support@videa.tv">support@videa.tv</a>
            p Or, use our email form and we will get back to you within our support hours of 08:00AM&mdash;11:00PM EST, Monday&mdash;Friday
          .vui-m-bottom--large
            button.vui-button.vui-button--secondary Email Us
      //- div.aside-footer
      //-   button.vui-button.vui-button--brand(type='button', @click='showRight=false') Close
</template>

<script>
  import store from './store'
  import SiteHeader from './components/SiteHeader.vue'
  import SiteNavigation from './components/SiteNavigation.vue'
  import SiteFooter from './components/SiteFooter.vue'
  import SiteHelp from './components/SiteHelp.vue'
  import Sidebar from './components/Aside.vue'
  import Icon from './components/Icon.vue'

  export default {
    components: { SiteHeader, SiteNavigation, SiteFooter, SiteHelp, Sidebar, Icon },

    data () {
      return {
        status: 'success',
        showAlert: false,
        showRight: false,
        sharedState: store.state
      }
    },

    methods: {
      closeDropdownsAndPopovers () {
        this.$broadcast('hide::popover')
        this.$broadcast('hide::tooltip')
        this.$broadcast('hide::dropdown')
      }
    }
  }
</script>
