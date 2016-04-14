<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Release To Buyer
    .modal-body
      p.vui-text-longform.vui-m-bottom--large
        | Are you sure you want to submit the avail
        | to the buyer?

      .vui-form-element.vui-m-bottom--large
        label.vui-label.vui-label--custom-1(for='') Expiration Date
        datepicker#endDate(:value.sync='expirationDate', name='expirationDate')

      .vui-text-align--right
        button.vui-button.vui-button--brand.vui-m-right--x-small(@click="postComment()") Submit
        button.vui-button.vui-button--neutral(@click.prevent='close()') Cancel
    export-proposal-modal(:show.sync="showExportProposalModal")
</template>

<script>
  import Datepicker from './Datepicker2.vue'
  import Modal from './Modal.vue'
  import ExportProposalModal from './ExportProposalModal.vue'

  export default {
    components: { Datepicker, Modal, ExportProposalModal },

    props: ['show'],

    data () {
      return {
        comment: '',
        showExportProposalModal: false,
        expirationDate: new Date('2016-04-22T09:24:00')
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.showExportProposalModal = true
      }
    }
  }
</script>
