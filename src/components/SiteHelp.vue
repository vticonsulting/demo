<template lang="jade">
  .site-help
    h2.vui-text-heading--medium Need Help?
</template>

<style lang="stylus">
  @import '../design-tokens'

  .site-help
    position fixed
    top 16rem
    right -3rem
    background-color $vui-color-brand-11
    color white
    cursor pointer
    padding 0.75rem 1.5rem 1rem
    transform rotate(-90deg)
    box-shadow $elevation-inverse-shadow-4
    h2
      font-weight 400
      font-size 1rem
</style>
