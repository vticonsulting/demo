<template lang="pug">
  .rejected-offer-dialog-container.modal-mask.modal-transition(v-show='show', show='isShown', hide-modal='hideNotesDialog')
    .ng-modal-overlay(@click='showModal')
    .ng-modal-dialog(:style='dialogStyle')
      .ng-modal-dialog-content
        .modal-container.modal-container--xx-large
          form.om-popup-container(name='rejectErrorForm', novalidate='', @submit='rejectOffer')
            .modal-header
              .ng-modal-header
                h3.vui-text-heading--medium Reject Offer
            .modal-body
              p.vui-m-top--medium.vui-m-bottom--medium
                | Seller comment why this offer is being rejected
                sup *
              .soft-warn.vui-grid.vui-m-bottom--medium(v-show='isError')
                //- i.glyphicon.glyphicon-warning-sign.vui-align-middle.vui-m-right--x-small
                ul.error
                  li Error Message is required.
              fieldset.vui-form-element.vui-m-bottom--large
                textarea.vui-textarea(v-model='rejectOfferMessage', required='')
              fieldset.vui-form-element
                input.vui-button.vui-button--secondary.vui-m-right--xx-small(type='button', value='Send Offer Rejection', @click='rejectOffer')
                input.vui-button.vui-button--neutral(type='button', value='Close', @click='hideDialog')
</template>

<script>
  export default {
    data () {
      return {
        isError: false,
        show: false,
        rejectOfferMessage: ''
      }
    },
    computed: {
      dialogStyle () {
        return { }
      }
    },
    methods: {
      showModal () {},
      rejectOffer () {},
      hideDialog () {}
    }
  }
</script>
