<template lang="pug">
  .active-orders-details
    //- active-order-cancel-reject-popup(show-dialog='detailsCtrl.isRejectCancellationPopupShown', reject-order-cancellation='detailsCtrl.rejectOrderCancellation')
    //- active-order-cancel-approve-popup(show-dialog='detailsCtrl.isApproveCancellationPopupShown', approve-order-cancellation='detailsCtrl.approveOrderCancellation')
    ebiz-history-popup(is-order-type-impression='detailsCtrl.isOrderTypeImpression', orders-with-revision='detailsCtrl.tabItems', show-dialog='detailsCtrl.isEbizHistoryPopupShown', videa-order-number='detailsCtrl.orderInfo.videaOrderNumber')
    spots-run-not-ordered-popup(show-dialog='detailsCtrl.openSpotsRunNotOrderedPopup', order-id='detailsCtrl.orderInfo.orderId', target-demo='detailsCtrl.orderInfo.demo')
    offer-popup(show-dialog='detailsCtrl.showPopupMakegoodOffersDialog')
    orbit-details-popup(show-dialog='detailsCtrl.isOrbitDetailsPopupShown')
    div(v-if='detailsCtrl.orderInfo')
      .vui-grid.vui-grid--align-spread.vui-grid--vertical-align-center.vui-m-bottom--medium
        h1.vui-text-heading--large Active Order Details
      .vui-m-bottom--large
        order-details-info(order-info='detailsCtrl.orderInfo', cancellation-errors='detailsCtrl.cancellationErrors', is-cancelled-order='detailsCtrl.isCancelledOrder', is-comment-readonly='!detailsCtrl.isCancelledOrder')
      .vui-grid.vui-grid--align-spread.vui-m-bottom--large
        h2.vui-text-heading--medium Details
        fieldset.vui-form-element
          close-button.vui-m-right--x-small
          input.vui-button.vui-button--secondary(type='button', value='Makegoods', v-if='!detailsCtrl.isCancelledOrder', @click='detailsCtrl.openMakegoodDetails()')
          input.vui-button.vui-button--secondary(type='button', value='Spots Run Not Ordered', v-if='!detailsCtrl.isCancelledOrder', @click='detailsCtrl.openSpotsRunNotOrderedPopup()')
          input.vui-button.vui-button--secondary(type='button', value='eBiz History', v-if='!detailsCtrl.isCancelledOrder', @click='detailsCtrl.showEbizHistory()')
      .order-container
        orders-details-tabs.flex-container(tab-items='detailsCtrl.tabItems', order-buy-type='detailsCtrl.orderInfo.orderBuyType', current-tab-order-id='detailsCtrl.currentTabOrderId', current-tab-changed='detailsCtrl.currentTabChanged', show-offer-dialog='detailsCtrl.showOfferDialog', is-active-order='!detailsCtrl.isCancelledOrder', demo='detailsCtrl.orderInfo.demo', show-orbit-details='detailsCtrl.showOrbitDetailsPopup')
</template>
