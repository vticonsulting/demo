<template lang="jade">
  // http://adamwathan.me/2016/01/04/composing-reusable-modal-dialogs-with-vuejs/
  .modal-mask(@click='close', v-show='show', transition='modal')
    .modal-container(@click.stop='', :class="{ 'modal-container--xx-large': size, 'class-b': isB }")
      slot
</template>

<script>
  export default {
    props: [
      'show',
      'onClose',
      'size'
    ],

    methods: {
      close () {
        this.onClose()
      }
    },

    ready () {
      document.addEventListener('keydown', (e) => {
        if (this.show && e.keyCode === 27) {
          this.onClose()
        }
      })
    }
  }
</script>

<style lang="stylus">

  @import '../variables'

  .modal-mask
    position fixed
    z-index $z-index-modal
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.8)
    transition opacity 0.3s ease

  .modal-container
    width $size-medium
    margin $spacing-x-large auto 0
    background-color $white
    background-color $color-background
    border-radius $border-radius-medium
    box-shadow 0 $spacing-xxx-small $spacing-x-small rgba(0, 0, 0, 0.33)
    transition all 0.3s ease

    &--small
      width $size-small

    &--medium
      width $size-medium

    &--large
      width $size-large

    &--x-large
      width $size-x-large

    &--xx-large
      width $size-xx-large

  .modal-header
    h3
      // margin-top -$spacing-medium
      padding $spacing-medium $spacing-x-large
      color $white
      background-color $vui-color-brand-3
      max-width calc(100% + $spacing-x-large)

  .modal-body
    padding $spacing-x-large
    padding-top 0

  .modal-enter, .modal-leave
    opacity 0

  .modal-enter .modal-container,
    .modal-leave .modal-container
    -webkit-transform scale(1.1)
    transform scale(1.1)
</style>
