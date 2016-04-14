<!-- https://github.com/TahaSh/vue-paginate -->
<!-- http://taha-sh.com/blog/how-to-create-a-simple-image-slider-with-vue-paginate-in-no-time -->
<template lang="jade">
  .vui-grid.vui-grid--align-spread.vui-m-top--x-small
    ol.vui-pagination
      li
        a.prev(href='#')
          icon.vui-icon(name='angle-double-left', style='margin-top: -3px')
      li
        a.active(href='#') 1
      li
        a(href='#') 2
      li
        a(href='#') 3
      li
        a(href='#') 4
      li
        a(href='#') 5
      li
        a(href='#') 6
      li
        a(href='#') 7
      li
        a(href='#') 8
      li
        a(href='#') 9
      li
        a.next(href='#')
          icon.vui-icon(name='angle-double-right', style='margin-top: -3px')
    div.vui-align-middle
      a(href="#")
       | Back to Top
       icon.vui-m-left--xx-small(name="arrow-circle-up")
</template>

<script>
  import Icon from './Icon.vue'

  export default {
    components: {Icon}
  }
</script>

<style lang="stylus">
  @import '../variables'

  .vui-pagination
    display flex
    align-items center

    li
      display inline

      &:first-child
        a
          border-radius $border-radius-small 0 0 $border-radius-small
      &:last-child
        a
          border-radius 0 $border-radius-small $border-radius-small 0

    a
      // border-color #ddd
      // float left
      // display block
      color $vui-color-brand-11
      background $color-background
      padding $spacing-xx-small $spacing-small
      margin-left -1px
      border 1px solid transparent
      &:hover
        background #eee

      &.active,
      &:active
        border-color $vui-color-brand-11
        background $vui-color-brand-11
        color $white
        cursor default
        outline none
</style>
