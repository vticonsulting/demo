<template lang="pug">
  .flex-container(tab-items='detailsCtrl.tabItems', order-buy-type='detailsCtrl.orderInfo.orderBuyType', current-tab-order-id='detailsCtrl.currentTabOrderId', current-tab-changed='detailsCtrl.currentTabChanged', show-offer-dialog='detailsCtrl.showOfferDialog', is-active-order='!detailsCtrl.isCancelledOrder', demo='detailsCtrl.orderInfo.demo', show-orbit-details='detailsCtrl.showOrbitDetailsPopup')
    order-line-current-info-popup(show-dialog='isCurrentLineInfoPopupShown', order-buy-type='orderBuyType', demo='demo')
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(role='tablist')
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(role='presentation', v-for='tab in tabItems', :class="{'vui-active':tab.orderId === currentTabOrderId}")
          a#tab_5009.vui-tabs--scoped__link(href='', v-text='tab.tabHeader', @click='selectTab(tab)') Original Order Version #1
    div(role='tabpanel', v-for='tab in tabItems', v-if='tab.orderId === currentTabOrderId')
      .vui-p-around--large.vui-tabs--scoped__content
        .vui-m-bottom--xx-small.p-a-5.row.active-orders-details-tab-options
          .col-md-2
            label.vui-checkbox
              input.vui-input(type='checkbox', v-model='tab.isShowSpotAllocations')
              span.vui-checkbox--faux
              span.vui-form-element__label Show Spot Allocations
            .vui-form-element_control.vui-m-right--small.vui-visible(:class="tab.isShowSpotAllocations ? 'vui-visible' : 'vui-hidden'")
              label.vui-radio(for='radio_1')
                input#radio_1(name='spotTypeFilter0', v-model='tab.isMissedSpotsShown', type='radio', value='true')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Missed
              label.vui-radio(for='radio_2')
                input#radio_2(name='spotTypeFilter0', v-model='tab.isMissedSpotsShown', type='radio', value='false')
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Traffic
        orders-details-grid.flex-container(items='tab.tableItems', has-description-of-change-column='hasDescriptionOfChangeColumn(tab)', order-buy-type='orderBuyType', show-current-info='showCurrentLineInfoPopup', is-show-spot-allocations='tab.isShowSpotAllocations', is-missed-spots-shown='tab.isMissedSpotsShown', show-offer-dialog='showOfferDialog', show-orbit-details='showOrbitDetails')
</template>
