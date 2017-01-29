<template lang="pug">
  .offers-makegoods-common-avail-offer-grids-wrapper
    //- offers-makegoods-requested-dayparts-popup(show-dialog='showRequestedDaypartsPopup', daypart-items='requestedDayparts')
    div
      .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
        .vui-col--padded.vui-align-middle
          h4.vui-text-heading--small(v-text='offersLabel')
        .vui-col--padded
          button.vui-button.vui-button--neutral(type='button', @click='addSpotsColumn')
            icon(name='plus-circle')
            span(v-text='addSpotsLabel')
          button.vui-button.vui-button--brand(type='button', @click='removeSpots')
            icon(name='minus-circle')
            | Delete Spot(s)
      .vui-scrollable.offers-makegood-offered-spots-container(style='height: 14rem')
        offers-makegood-offered-spots-grid(items='makegoodOffers', order-buy-type='orderBuyType', offers-changed='onDataChanged', length-items='spotLengthItems')
      .vui-grid.vui-grid--pull-padded.vui-grid--align-spread.vui-m-top--medium.vui-m-bottom--medium
        .vui-col--padded.vui-align-middle
          h4.vui-text-heading--small Station Avails
        .vui-col--padded
          button.vui-button.vui-button--neutral(type='button', @click='createSpots')
            icon(name='plus-circle')
            | Create Spots
          button.vui-button.vui-button--brand(type='button', @click='addSpots')
            icon(name='plus-circle')
            | Add Spot(s)
    div
      offers-makegoods-avails-filter(filter='filterAvails.value', apply-filter='filterAvailsApply', clear-filter='filterAvailsClear', selected-preemt-spot-lengths-async='selectedPreemtSpotLengthsAsync', show-requested-dayparts='showRequestedDayparts')
      div(style='height: 25rem')
        offers-makegoods-avails-grid(items='availsItems', order-buy-type='orderBuyType')
      .vui-m-top--medium
        label Found Avails Count:
        span(v-text='availsCount')
</template>

<script>
export default {
  data () {
    return {
      offersLabel: 'Makegood spot(s) offered',
      addSpotsLabel: 'Add a week',
      availsCount: 0
    }
  },
  methods: {
    addSpotsColumn () {},
    removeSpots () {},
    createSpots () {},
    addSpots () {}
  }
}
</script>
