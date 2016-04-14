<template lang="jade">
  .vui-dropdown-trigger.vui-dropdown-trigger--click(:class='{ "vui-is-open": show, dropdown: !dropup, dropup: dropup}', aria-expanded='{{show}}')
    button.vui-button.vui-not-selected(aria-live='assertive', aria-expanded='{{show}}' aria-haspopup='true', @click='toggle($event)', :disabled='disabled')
      span.vui-m-right--xx-small(style='color: white') {{ text }}
      icon(name='caret-down', style='color: #4296b4; margin-right: 0')
    .vui-dropdown(:class='{ "vui-nubbin--top": nubbinTop, "vui-nubbin--top-left": nubbinLeft, "vui-nubbin--top-right": nubbinRight }')
      ul.dropdown-menu.dropdown__list.vui-dropdown__list(role='menu')
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("settings")', role='menuitem')
            p.vui-truncate Preferences
        li.dropdown-item.vui-dropdown__item
          a(@click.prevent='clicked("home")', role='menuitem')
            p.vui-truncate Logout
</template>

<script>
  import Icon from './Icon.vue'

  export default {
    components: { Icon },

    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        show: false,
        nubbinLeft: false,
        nubbinRight: false,
        nubbinTop: true
      }
    },

    methods: {
      toggle (e) {
        this.show = !this.show
        if (this.show) {
          this.$dispatch('shown::dropdown')
          e.stopPropagation()
        } else {
          this.$dispatch('hidden::dropdown')
        }
      },

      clicked (route) {
        this.show = false
        this.$route.router.go({
          name: route
        })
      }
    },

    events: {
      'hide::dropdown' () {
        this.show = false
      }
    }
  }
</script>

<style lang="sass">

  // @import '../variables'

  // .dropdown
  //   position relative
  //   display inline-block
  //   // margin-right 2rem
  //   padding: 0 .25rem

  //   &.open .dropdown-button
  //     // color $color-ok-text
  //     text-decoration underline
  // .dropdown-button
  //   background none
  //   border none
  //   padding 0
  //   text-dropdown()
  //   transition(all 0.12s linear)
  //   &:focus
  //     outline none
  //   &:hover
  //     // color darken($color-dropdown, 20)
  //     text-decoration underline
  // .open > .dropdown-menu,
  // .open > .dropdown-flyout
  //   display block
  // .open .dropdown-caret
  //   transform rotate(180deg)
  //   display inline-block
  // .dropdown-caret
  //   transition(all 0.1s linear)
  //   margin-left 2px
  //   font-size 12px
  // .dropdown-circle
  //   display inline-block
  //   width $spacing-medium
  //   height $spacing-medium
  //   border-radius $border-radius-large
  //   position relative
  //   border 2px solid $color-border
  //   top 3px
  //   margin-right 2px
  //   &.visible
  //     border 2px solid $color-cta-solid
  //   &.hidden
  //     border 2px solid $color-warning-solid
  //   &.preview
  //     border 2px solid $color-general
  //   &.scheduled
  //     border 2px solid $color-ok-solid
  // .dropdown-menu
  //   color $vui-color-brand-8
  //   position absolute
  //   top 100%
  //   z-index $z-index-dropdown
  //   display none
  //   min-width $size-x-small
  //   margin $spacing-xx-small 0 0
  //   list-style none
  //   border-radius $border-radius-small
  //   padding $spacing-x-small 0
  //   box-shadow 0 0 $spacing-xx-small 0 $color-border
  //   // line-height 2.5
  //   background $white
  //   li
  //     display block
  //     padding 0 $spacing-large
  //     cursor pointer
  //     &:hover
  //       background lighten($color-border, 17)
  //       // background #ccc
  //     span
  //       margin-right $spacing-x-small
  // .dropdown-settings
  //   font-size font-size-large
  //   margin-left 0
  //   line-height 1
  //   position relative
  //   top $spacing-xxx-small
  //   color $color-label
  //   transition(all 0.1s linear)
  //   &:hover
  //     cursor pointer
  //     color $color-ok-solid
  //   .icon-delete
  //     font-size font-size-large
  //     transition(all 0.1s linear)
  //     top $spacing-xxx-small
  //     &:hover
  //       color $color-warning-solid
  // .open .dropdown-settings
  //   color $color-ok-solid
  // .dropdown-flyout
  //   position absolute
  //   top 100%
  //   z-index 1000
  //   display none
  //   width 400px
  //   right -$spacing-large
  //   margin 15px 0 0
  //   border-radius 5px
  //   box-shadow 0px 0px 5px 0px $color-border
  //   background $white
  //   padding $spacing-large
  //   h2
  //     text-menulist()
  //     line-height 1
  //     margin-bottom 1rem
  //   .button
  //     margin-top 0.6rem
  // .dropdown-arrowbefore
  //   top -11px
  //   border-left $spacing-x-small solid transparent
  //   border-right $spacing-x-small solid transparent
  //   border-bottom 10px solid rgba(57, 70, 78, 0.15)
  //   border-style none double solid
  //   display block
  //   position absolute
  //   right $spacing-large
  //   vertical-align middle
  //   content ""
  //   width 0
  //   height 0
  // .dropdown-arrowafter
  //   top -10px
  //   border-left $spacing-x-small solid transparent
  //   border-right $spacing-x-small solid transparent
  //   border-bottom 10px solid $white
  //   border-style none double solid
  //   display block
  //   position absolute
  //   right $spacing-large
  //   vertical-align middle
  //   content ""
  //   width 0
  //   height 0
  // .dropdown-left .dropdown-menu
  //   // right -0.5rem
  //   right 0
  // .dropdown-right .dropdown-menu
  //   left -0.5rem
</style>
