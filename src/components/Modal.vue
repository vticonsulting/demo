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

