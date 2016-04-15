<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Order Details
    .modal-body
      h4.vui-text-heading--small.vui-m-bottom--medium {{ account.advertiser }}
      table.vui-table.vui-no-row-hover
        thead
          tr
            th Order Number
            th Flight Start
            th Flight End
            th Revenue
            th Share
        tbody
          tr(v-for='order in account.orders', :class='($index % 2 === 0) ? "vui-highlight" : ""')
            td {{ order.id }}
            td {{ order.flightStartDate }}
            td {{ order.flightEndDate }}
            td.vui-text-align--right {{ order.revenue | numberWithCommas | formatMoney }}
            td.vui-text-align--right {{ order.share | decimalToPercent }}
</template>

<script>
  import Modal from './Modal.vue'

  export default {
    components: {Modal},

    props: ['show', 'account'],

    data () {
      return {
        comment: ''
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      }
    }
  }
</script>
