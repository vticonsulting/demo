<template lang="pug">
  .makegoods-details
    page-title(text='KOKI 06/27/2016-09/25/2016')
    offer-popup(show-dialog='showPopupMakegoodOffersDialog')
    h1.vui-text-heading--large.vui-m-bottom--medium Order Information - Offers ( Details )
    order-details-info(order-info='orderInfo')
    orbit-details-popup(show-dialog='isOrbitDetailsPopupShown')
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        | Details
      fieldset.vui-form-element
        input.vui-button.vui-button--brand.vui-m-right--x-small(type='button', value='Save', @click='save')
        close-button
    offer-tab-details
    .row.legend-text.col-md-12.text-center
      .col-md-3
      .col-md-2
        label Total Spots Ordered:
        span 10
      .col-md-2
        label Open Pre-empts:
        span 1
      .col-md-2
        label Pending MGs:
        span 1
</template>

<script>
  import moment from 'moment'
  import store from 'store'

  export default {
    data () {
      return {
        sharedState: store.state
      }
    },
    methods: {
      save () {}
    }
  }
</script>
