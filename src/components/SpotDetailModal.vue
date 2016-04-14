<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')
    .modal-header.vui-m-bottom--x-large
      h3.vui-text-heading--medium Order Details
    .modal-body
      .vui-scrollable--x.vui-m-bottom--medium
        table.vui-table.vui-table--custom-1.vui-no-row-hover
          thead
            tr
              th Advertiser
              th Intended Air Date
              th Unit Rate
              th
                | CPP
                sup 1
          tbody
            tr(v-for='spot in spots', :class='($index % 2 === 0) ? "vui-highlight" : ""')
              td {{ spot.advertiser }}
              td.u-width-small {{ spot.intendedAirDate }}
              td.u-width-small.vui-text-align--right {{ spot.unitRate | numberWithCommas | formatMoney }}
              td.u-width-small.vui-text-align--right {{ spot.cpp | numberWithCommas | formatMoney }}
      p.vui-text-body--small
        sup 1
        span Nielsen source or data derived from Nielsen
</template>

<script>
  import Modal from './Modal.vue'

  export default {
    components: { Modal },

    props: ['show', 'program'],

    data () {
      return {
        comment: '',
        spots: require('./sample-spots.json')
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
