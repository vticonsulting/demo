<template lang="jade">
  #app(@click='closeDropdownsAndPopovers()')
    site-header
    site-navigation
    main.vui-main(:class="{ 'vui-main--login': sharedState.activeApp == 'login' }")
      router-view
    site-footer
    site-help
</template>

<script>
  import store from './store'
  import SiteHeader from './components/SiteHeader.vue'
  import SiteNavigation from './components/SiteNavigation.vue'
  import SiteFooter from './components/SiteFooter.vue'
  import SiteHelp from './components/SiteHelp.vue'

  export default {
    components: { SiteHeader, SiteNavigation, SiteFooter, SiteHelp },

    data () {
      return {
        status: 'success',
        showAlert: false,
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

<style lang="scss">
  $static-icon-path: '/assets/icons';
  $static-image-path: '/assets/images';
  $static-font-path: '/static/fonts/webfonts';
  $fa-font-path: $static-font-path;
  $css-prefix: 'vui-';
  $reset-wrapping-class: '.vui';

  @import './design-tokens';
  @import './vendor/design-system-bower/scss/index';
  @import './vendor/font-awesome/scss/font-awesome';
  @import "./vendor/animate.css/animate";
</style>

<style lang="stylus">
  @import 'design-tokens'

  input::placeholder
    color $color-placeholder

  html
    overflow-y scroll
    height 100%

  a
    color $vui-color-link

  i, sup
    color $vui-color-brand-9

  .body
    font-family Roboto, sans-serif
    font-weight 300
    color $vui-color-brand-8

  .error
    font-weight bold
    color $vui-color-brand-10

  .required
    color $vui-color-brand-10

  .v-link-active
    color $vui-color-link-active !important
    text-decoration underline

  [v-cloak]
    .v-cloak--block
      display block
    .v-cloak--inline
      display inline
    .v-cloak--inlineBlock
      display inline-block
    .v-cloak--hidden
      display none
    .v-cloak--invisible
      visibility hidden

  .v-cloak--block,
  .v-cloak--inline,
  .v-cloak--inlineBlock
    display none

  body,
  #app
    display flex
    flex-direction column
    min-height 100vh
    background-color $color-background
    color $black
    position relative

  .vui-container
    padding-left ($spacing-large * 3)
    padding-right ($spacing-large * 3)

  .vui-main
    margin-bottom $spacing-x-large
    padding-left ($spacing-large * 3)
    padding-right ($spacing-large * 3)
    flex-grow 1

    &--login
      background-image url('./assets/img/login-background.jpg')
      background-position 0 50%
      background-repeat no-repeat
      background-attachment local
      background-size cover
      margin-top -($spacing-x-large)
      margin-bottom 0
      max-width none

  .vui-box
    border-radius 0

  .vui-icon--sort-arrow
    width 1rem
    height 1rem
    color $vui-color-sort-arrow

  .vui-input,
  .vui-select,
  .vui-button,
  .vui-textarea
    border-radius $border-radius-small

  .vui-input,
  .vui-select,
  .vui-textarea
    border: 1px solid hsla(304, 48%, 28%, 0.5)

  .vui-highlight
    background-color $vui-color-highlight

  .vui-table:not(.vui-no-row-hover) tbody tr:hover > td,
  .vui-table:not(.vui-no-row-hover) tbody tr:hover > th
    background-color $vui-color-highlight

  .vui-table--custom-1
    border-collapse collapse
    border-spacing $border-width-thick

    tr.region:last-child td,
    tfoot td
      border-top-width 3px
      font-weight 500

    th, th a
      background $dark-gray
      color $white

    th,
    td
      border 1px solid $vui-color-brand-7

    td.expanded
      background-color: $vui-color-expanded-cell

    .vui-table
      background transparent
      th
        background transparent
        color $vui-color-brand-8
        font-weight bold
      thead
        th
          border 1px solid transparent
          border 1px solid $vui-color-brand-7
          border-bottom 2px solid $vui-color-brand-8
      tbody
        td
          border 1px solid transparent
          border-bottom 1px solid $vui-color-brand-7
          border 1px solid $vui-color-brand-7
      tfoot
        td
          border 1px solid transparent
          border 1px solid $vui-color-brand-7

  .vui-table--nested-rows
    > tbody tr:not(:first-child)
      td:first-child
        padding-left 3.5rem

    > tbody tr.week
      td:first-child
        padding-left: 5.5rem

    > tbody tr.showTime td:first-child
      padding-left: 5rem

    > tbody tr.date td:first-child
      padding-left: 6.5rem

  .vui-table--calendar
    th, td
      cursor pointer
    thead th:first-child
      cursor default

  /**
   * Badge
   */
  .vui-badge
    color $white
    border-radius $border-radius-small

    &.ahead,
    &.new,
    &.active,
    &.confirmed
      color $white
      background-color $vui-color-success
      border-radius $border-radius-small

    &.on-track
      color $white
      background-color $vui-color-warn
      border-radius $border-radius-small

    &.resend
      color $white
      background-color $vui-color-brand-9
      border-radius $border-radius-small

    &.pending
      color $white
      background-color $vui-color-brand-9
      border-radius $border-radius-small

    &.released
      color $white
      background-color $vui-color-brand-3
      border-radius $border-radius-small

    &.behind,
    &.cancelled
      color $white
      background-color $vui-color-brand-10
      border-radius $border-radius-small

    &.accepted,
    &.pending
      color $white
      background-color $vui-color-brand-3
      border-radius $border-radius-small

    &.rejected,
    &.expired
      color $white
      background-color $vui-color-brand-10
      border-radius $border-radius-small

  .badge--dev-ready
    background #4bca81
    color $white
    border-radius 15rem
    padding 0.25rem 0.5rem

  .stretchy-wrapper
    position relative
    width 100%
    background black
    padding-bottom 56.25% // 16 x 9
    // padding-bottom 75% // 4 x 3
    // padding-bottom 66.66% // 3 x 2
    // padding-bottom 62.5% // 8 x 5

    > div
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      color white
      font-size 1.5rem
      text-align center

  .view
    position absolute
    width 100%
    transition opacity .2s ease
    box-sizing border-box
    padding 8px 20px
    &.v-enter, &.v-leave
      opacity 0

  /**
   * Utililty Classes
   */
  .u-width-xx-small
    width 3rem
  .u-width-x-small
    width 4rem
  .u-width-small
    width 5rem
  .u-width-medium
    width 6rem
  .u-width-large
    width 7rem
  .u-width-x-large
    width 8rem
  .u-width-xx-large
    width 9rem
  .u-width-xxx-large
    width 10rem
  .u-currency
    text-align right
    &:before
      display block
      float left
      padding-right 1rem
      content "$ "
      color lighten($vui-color-brand-8, 50%)
  .u-highlight
    background-color $vui-color-highlight
</style>
