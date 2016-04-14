<template lang="jade">
  .uk-modal
    .uk-modal-dialog(:class='classes')
      div(v-if='opened')
        slot
</template>

<script>
  export default {
    props: {
      large: Boolean,
      lightbox: Boolean,
      closed: Function,
      modifier: {type: String, default: ''},
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    data () {
      return {
        opened: false
      }
    },

    ready () {
      var vm = this
      this.$appendTo('body')
      this.modal = UIkit.modal(this.$el, _.extend({modal: false}, this.options))
      this.modal.on('hide.uk.modal', function () {
        vm.opened = false
        if (vm.closed) {
          vm.closed()
        }
      })
    },

    computed: {
      classes () {
        var classes = this.modifier.split(' ')
        if (this.large) {
          classes.push('uk-modal-dialog-large')
        }
        if (this.lightbox) {
          classes.push('uk-modal-dialog-lightbox')
        }
        return classes
      }
    },

    methods: {
      open () {
        this.opened = true
        this.modal.show()
      },

      close () {
        this.modal.hide()
      }
    }
  }
</script>
