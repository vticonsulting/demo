<template lang="jade">
  header.vui-site-header.vui-site-header--app(role='banner')
    .vui-site-header--app__container
      a.vui-align-middle(v-link="{ name: 'home' }")
        img.vui-site-header__logo(alt='Videa', src='../assets/svg/videa-logo--white.svg')
</template>

<style lang="stylus">
  @import '../assets/_design-tokens'

  .vui-site-header
    color $white
    background-color $vui-color-brand-5
    padding $spacing-medium 0

    &__logo
      height $spacing-x-large

    &--app
      background-image linear-gradient(to right, $vui-color-brand-1 27.5%, $vui-color-brand-5 27.5%, $vui-color-brand-5 27.5%)
      padding 0

      &__container
        background url('../assets/img/videa-logo__background.png') no-repeat
        padding $spacing-medium $spacing-x-large $spacing-medium $spacing-xx-large
        padding-right $spacing-xxx-large
        min-width $container-min-width
        max-width $container-max-width
        max-height 64px

</style>
