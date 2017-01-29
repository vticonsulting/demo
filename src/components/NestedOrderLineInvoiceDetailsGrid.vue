<!-- <nested-order-line-invoice-details-grid child-items="item.child" order-line-id="item.orderDetailsId" spot-allocation-navigator="ctrl.spotAllocationNavigator" is-show-spot-allocations="isShowSpotAllocations" column-widths="ctrl.expandingColumnsWidths" is-items-selectable="ctrl.isChildCheckboxVisible()" order-line-child-selected="ctrl.orderLineChildSelected(item)"> -->
<template lang="pug">
  .nested-order-line-invoice-details-grid
    .vui-box(style='padding: 0.5rem; border: none; border-top: 1px solid #51535c')
      h3.vui-text-heading--label Agency Invoice Details
    div
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        caption
        thead
          tr
            th.vui-truncate(:style="{'width': ctrl.columnWidths.isciAdId}", style='border-left: 1px solid rgb(81, 83, 92); width: 100px;')
              | ISCI
              br
              | AD ID
            th.vui-truncate(:style="{'width': ctrl.columnWidths.invoiceDate}", style='width: 100px;')
              | Station
              br
              | Inv Date
            th.vui-truncate(:style="{'width': ctrl.columnWidths.affidavitRate}", style='width: 99px;')
              | Station
              br
              | Inv Amt
            th.vui-truncate(:style="{'width': ctrl.columnWidths.externalInvoiceId}", style='width: 99px;')
              | Station
              br
              | Inv #
        tbody
          tr(v-for='item in childItems')
            td(ng-bind='item.isciAdId', title='', style='border-left: 1px solid #51535c;height: 2.5rem')
            td.vui-truncate(ng-bind='item.invoiceDate|vuiDate', title='')
            td.vui-truncate.vui-text-align--right(ng-bind='item.detailsAffidavitRate|vuiDecimal', title='', :class="{'currency': item.detailsAffidavitRate}")
            td.vui-truncate(ng-bind='item.externalInvoiceId', title='')
</template>
