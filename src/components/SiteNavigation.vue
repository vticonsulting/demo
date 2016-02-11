<template lang="jade">
  nav.vui-site-navigation
    .vui-container.vui-grid.vui-grid--align-spread
      form.vui-form--inline.vui-align-middle(v-if="sharedState.activeApp == 'login'")
        .vui-form-element
          .vui-form-element__control
            .vui-input-has-icon.vui-input-has-icon--left
              icon.vui-input__icon(name='envelope')
              input.vui-input(type='email', placeholder='Email')
        .vui-form-element
          .vui-form-element__control
            .vui-input-has-icon.vui-input-has-icon--left
              icon.vui-input__icon(name='lock')
              input.vui-input(type='password', placeholder='Password')
        button.vui-button.vui-button--secondary(type='button') Login
      ul.vui-grid.vui-align-middle(v-if="sharedState.activeApp == 'login'")
        li
          a Reps
        li
          a Sellers
        li
          a Buyers
</template>

<script lang="babel">
  import store from '../store'
  import Icon from '../components/Icon.vue'

  export default {
    components: {
      Icon
    },

    data () {
      return {
        sharedState: store.state
      }
    }
  }
</script>

<style lang="stylus">

  @import '../assets/_design-tokens'

  .vui-site-navigation
    position relative
    background-color $vui-color-brand-2
    background-color $vui-color-brand-4
    color $white

    .v-link-active
      color $vui-color-brand-6 !important
      color $vui-color-brand-5 !important
      color $vui-color-brand-2 !important
      color $vui-color-brand-1 !important
      border-top .25rem solid transparent
      border-bottom .25rem solid $vui-color-brand-2
      border-bottom .25rem solid $vui-color-brand-1

    a, &__link
      color $white
      display inline-block
      padding $spacing-medium
      margin-right $spacing-medium
      border-top .25rem solid transparent
      border-bottom .25rem solid transparent
      text-decoration none
      &:hover
        border-bottom .25rem solid $vui-color-brand-2
        border-bottom .25rem solid $vui-color-brand-1
        text-decoration none
        color $vui-color-brand-2
        color $vui-color-brand-1

      &:last-child
        margin-right 0
</style>
