<!-- <nested-order-line-grid child-items="item.child" order-line-id="item.orderDetailsId" spot-allocation-navigator="ctrl.spotAllocationNavigator" is-show-spot-allocations="isShowSpotAllocations" column-widths="ctrl.expandingColumnsWidths" is-items-selectable="ctrl.isChildCheckboxVisible()" order-line-child-selected="ctrl.orderLineChildSelected(item)" open-makegood="showOfferDialog"> -->
<template lang="pug">
  .nested-order-line-grid
    .vui-box(style='padding: 0.5rem; border: none;border-top: 1px solid #51535c')
      h3.vui-text-heading--label Traffic logs
    div
      table.vui-table.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(v-if='ctrl.isColumnExists(ctrl.columnWidths.blank)', :style="{'width': ctrl.columnWidths.blank}", style='width: 39px;')
            th(:style="{'width': ctrl.columnWidths.unitAiredStatusName}", style='width: 100px;')
              vui-sorting-column(title='Aired<br>Status', current-sorting='ctrl.sorting', column-name='unitAiredStatusName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.unitAiredStatusName)')
            th(:style="{'width': ctrl.columnWidths.spotNumber}", style='width: 78px;')
              vui-sorting-column(title='Spot #', current-sorting='ctrl.sorting', column-name='spotNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.spotNumber)')
            th(:style="{'width': ctrl.columnWidths.airDay}", style='width: 108px;')
              vui-sorting-column(title='Air Day', current-sorting='ctrl.sorting', column-name='airDay', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.airDay)')
            th(:style="{'width': ctrl.columnWidths.airTime}", style='width: 138px;')
              vui-sorting-column(title='Air Time', current-sorting='ctrl.sorting', column-name='airTime', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.airTime)')
            th(:style="{'width': ctrl.columnWidths.programPlaced}", style='width: 192px;')
              vui-sorting-column(title='Program Placed', current-sorting='ctrl.sorting', column-name='programName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.programPlaced)')
            th(:style="{'width': ctrl.columnWidths.priority}", style='width: 88px;')
              vui-sorting-column(title='Priority', current-sorting='ctrl.sorting', column-name='priority', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.priority)')
            th(:style="{'width': ctrl.columnWidths.status}", style='width: 80px;')
              vui-sorting-column(title='Status<br>Name', current-sorting='ctrl.sorting', column-name='statusName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.statusName)')
            th(:style="{'width': ctrl.columnWidths.airDate}", style='width: 100px;')
              vui-sorting-column(title='Air Date', current-sorting='ctrl.sorting', column-name='airDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.airDate)')
            th(:style="{'width': ctrl.columnWidths.lineNumber}", style='width: 86px;')
              vui-sorting-column(title='Station<br>Line #', current-sorting='ctrl.sorting', column-name='lineNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.lineNumber)')
            th(:style="{'width': ctrl.columnWidths.altLineNumber}", style='width: 65px;')
              | Alt.
              br
              | Line #
            th(:style="{'width': ctrl.columnWidths.assignedMakegoodId}", style='border-right: 1px solid rgb(81, 83, 92); width: 73px;') MG #
            th(:style="{'width': spotAllocationNavigator.tableCellWidth}", v-if='isShowSpotAllocations', style='background-color: rgb(240, 248, 252); width: 503px;')
        tbody
          tr(v-for='item in childItems')
            td(v-if='ctrl.isColumnExists(ctrl.columnWidths.blank)', rowspan='0')
            td.vui-truncate(rowspan='0', v-if='item.isMain', ng-bind='(!!item.airedBroadcastingDateTime ? item.unitAiredStatusName : null)', title='')
            td.vui-text-align--right(rowspan='0', v-if='item.isMain', ng-bind='item.spotNumber', title='0') 0
            td.vui-truncate(rowspan='0', v-if='item.isMain', ng-bind='item.airDay', title='Thursday') Thursday
            td(rowspan='0', v-if='item.isMain', ng-bind='item.airTime|vuiTimeWithSeconds', title='06:00:00 pm') 06:00:00 pm
            td.vui-truncate(rowspan='0', v-if='item.isMain', ng-bind='item.programName', title='Unknown') Unknown
            td(rowspan='0', v-if='item.isMain', ng-bind='item.priority', title='')
            td.vui-truncate(rowspan='0', v-if='item.isMain', ng-bind='item.statusName', title='Open Preempt') Open Preempt
            td(rowspan='0', v-if='item.isMain', ng-bind='item.airDate|vuiDate', title='09/02/2016') 09/02/2016
            td.vui-text-align--right(rowspan='0', v-if='item.isMain', ng-bind='item.lineNumber', title='1') 1
            td.vui-text-align--right(rowspan='0', v-if='item.isMain', ng-bind='item.altLineNumber', title='1') 1
            td(rowspan='0', v-if='item.isMain', title='', style='border-right: 1px solid #51535c')
              a.text-underline(href='', ng-bind='item.assignedMakegoodData.sellerOfferId', @click='openMakegood(item.assignedMakegoodData)')
            td.spot-allocation-cell(rowspan='0', v-if='isShowSpotAllocations && item.isMain')
              vom-spot-allocation-with-missed-spots(v-model='item.spotAllocations', navigator='spotAllocationNavigator')
</template>
