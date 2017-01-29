<template lang="pug">
  footer.vui-site-footer(role='contentinfo')
    .vui-container
      nav.vui-navigation--footer.vui-grid.vui-grid--align-center
        ul.vui-list--horizontal.vui-has-dividers--right
          li.vui-list__item
            router-link(:to="{ name: 'privacy'}") Privacy Policy
          li.vui-list__item
            router-link(:to="{ name: 'terms'}") Terms &amp; Conditions

      p
        | 3390 Peachtree Road, NE, Suite 400 Atlanta, GA 30326
        br
        | Copyright © 2014&ndash;{{ new Date().getFullYear() }} Videa. All rights reserved.

    div(v-if='isLoading')
      spinner(color='#276092', size='16px')

    sidebar(:show='showRight', placement='right', header='Page Info', :width='350')
      h4.vui-text-heading--small Page Information
      div.aside-footer
        button.vui-button.vui-button--brand(type='button', @click='showRight=false') Close
</template>

<script>
  import store from 'store'

  export default {
    data () {
      return {
        sharedState: store.state,
        showRight: false,
        isLoading: false
      }
    }
  }
</script>

