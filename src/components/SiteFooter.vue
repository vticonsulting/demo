<template lang="jade">
  footer.vui-site-footer(role='contentinfo')
    .vui-container
      nav.vui-navigation--footer.vui-grid.vui-grid--align-center
        ul.vui-list--horizontal.vui-has-dividers--right
          li.vui-list__item
            a(v-link="{ name: 'privacy'}") Privacy Policy
          li.vui-list__item
            a(v-link="{ name: 'terms'}") Terms &amp; Conditions
      p
        | 3390 Peachtree Road, NE, Suite 700 Atlanta, GA 30326
        br
        | Copyright © 2016 Videa. All rights reserved.
</template>

<style lang="stylus">
  @import '../assets/_design-tokens'

  .vui-site-footer
    background-color $vui-color-brand-4
    color $white
    text-align center
    padding $spacing-medium
    a
      color $white
      text-decoration underline
</style>
