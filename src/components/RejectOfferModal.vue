<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Reject Offer
    .modal-body
      fieldset.vui-form-element.vui-m-bottom--large
        label.vui-form-element__label(for='reject-order-notes') Notes or Comments
        .vui-form-element__control
          textarea.vui-textarea

      .vui-text-align--right
        button.vui-button.vui-button--brand.vui-m-right--x-small(@click.prevent='close()') Submit
        button.vui-button.vui-button--neutral(@click.prevent='close()') Cancel
</template>

<script>
  import Modal from './Modal.vue'

  export default {
    components: { Modal },

    props: ['show'],

    data () {
      return {
        comment: '',
        expirationDate: new Date()
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      }
    }
  }
</script>
