<template lang="jade">
  button.vui-button(class='vui-button--{{type}}')
    slot
</template>

<script>
  export default {
    props: ['buttonText', 'type']
  }
</script>

<style lang="stylus">
  /***
   * Buttons:
   */

  /**
   * Button:
   * `.vui-button` - Buttons are the essence of life and the raison d'etre of UI design.
   * Live it, love it.
   *
   *     @example
   *     a.vui-button.vui-button--brand Brand button
   */

</style>
