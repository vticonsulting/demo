<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--medium
    .vui-align-middle(
      ng-show = 'detailsCtrl.orderInfo'
    )
      campaign-performance-header(
        order-info = 'detailsCtrl.orderInfo'
      )
        span.vui-text-heading--medium FIRST COAST BPG TRUCK DEALER G GENERAL MARKET 6630
</template>
