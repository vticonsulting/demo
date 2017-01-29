<!-- <nested-order-line-makegoods-grid items="item.makegoods" order-line-id="item.orderDetailsId" column-widths="ctrl.expandingMakegoodColumnsWidths" show-offer-dialog="showOfferDialog"> -->
<template lang="pug">
  .nested-order-line-makegoods-grid
    .vui-box(style='padding: 0.5rem; border: none; border-top: 1px solid #51535c')
      h3.vui-text-heading--label Makegoods
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(:style="{'width': ctrl.columnWidths.sellerOfferId}", style='width: 97px')
              vui-sorting-column(title='MG #', column-name='sellerOfferId', current-sorting='ctrl.sorting', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.sellerOfferId)')
            th(:style="{'width': ctrl.columnWidths.statusName}", style='width: 100px')
              vui-sorting-column(title='MG<br>Status', column-name='statusName', current-sorting='ctrl.sorting', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.statusName)')
            th(:style="{'width': ctrl.columnWidths.confirmDate}", style='width: 100px')
              vui-sorting-column(title='MG<br>Applied', column-name='confirmDate', current-sorting='ctrl.sorting', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.confirmDate)')
            th(:style="{'width': ctrl.columnWidths.newMakegoodLines}", style='width: 100px')
              vui-sorting-column(title='MG<br>New Lines', column-name='newMakegoodLines', current-sorting='ctrl.sorting', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.newMakegoodLines)')
        tbody
</template>
