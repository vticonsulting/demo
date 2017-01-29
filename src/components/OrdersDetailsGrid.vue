<template lang="pug">
  .fixed-header-grid(style='display: flex; flex-direction: column; position: relative; height: 100%;')
    div(style='overflow: hidden; flex: 0 0 auto; width: 1709px;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(style='position: relative;')
        thead
          tr
            th(style='width: 80px')
            th(style='width: 78px')
              vui-sorting-column(title='Line #', column-name='lineNumber', current-sorting='sorting')
            th(style='width: 82px') Days
            th(style='width: 110px') Time
            th(style='width: 200px')
              vui-sorting-column(title='Program', column-name='programName', current-sorting='sorting')
            th(style='width: 88px') Len
            th(style='width: 116px')
              | Spots
              br
              | Ordered
            th(style='width: 100px')
              | Spots
              br
              | Missed
            th(style='width: 86px')
              | Traffic
              br
              | Spots
            th(style='width: 140px')
              | Current
              br
              | Information
            th.spot-allocation-column(:style="{'width': spotAllocationNavigator.tableCellWidth}", v-if='isShowSpotAllocations', style='width: 503px;')
              vom-spot-allocation-header(v-model='items[0].weeklySpotAllocations', navigator='spotAllocationNavigator')
            th(style='width: 100px;')
              | Spot
              br
              | Rate
            th(style='width: 100px;', v-if='!isImpressionsBuyType')
              | Buyer
              br
              | RTG
            th(style='width: 100px;', v-if='!isImpressionsBuyType')
              | Videa
              br
              | RTG
            th(style='width: 100px;')
              | Line
              br
              | $ Total
            th(style='width: 100px;')
              | Buyer
              br
              | Comment
            th(style='width: 110px;')
              | Station Order
              br
              | Comment
            th(style='width: 100px;')
              | Spot
              br
              | Option
            th(style='width: 100px;')
              | Line
              br
              | Type
    .vui-scrollable(style='flex: 0 1 auto; margin-top: 0px;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
          tr(ng-repeat-start='item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc', :class="{'vui-is-selected':item.isExpanded}")
            td.vui-text-align--center(style='width: 80px')
              a(@click='item.isExpanded = !item.isExpanded')
                svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                  use(v-if='!item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-right')
            td.vui-text-align--right(style='width: 78px', v-if='!item.isOrbit', v-text='item.lineNumber', title='1') 1
            td(style='width: 82px', v-text='item.days|vuiDaysAbbreviation', title='MO-FR') MO-FR
            td.vui-truncate(style='width: 110px', v-text='item.time|vuiTimeRange', title='10 - 10:30pm') 10 - 10:30pm
            td.vui-truncate(style='width: 200px', v-text='item.programName', title='FAMILY GUY                        ') FAMILY GUY
            td(style='width: 88px', v-text='item.spotLength|vuiSeconds', title='30 s') 30 s
            td.vui-text-align--right(style='width: 116px', v-text='item.totalSpots', title='12') 12
            td.vui-text-align--right(style='width: 100px', v-text='item.totalMissedSpots', title='')
            td.vui-text-align--right(style='width: 86px', v-text='item.totalTrafficSpots', title='')
            td.vui-text-align--center(style='width: 140px')
              a.pointer.current-info.popup(@click='showCurrentInfo(item)')
                icon.vui-m-bottom--xxx-small.vui-m-right--xxx-small(name='popout')
            td.spot-allocation-cell(:style="{'width': spotAllocationNavigator.tableCellWidth}", v-if='isShowSpotAllocations', style='width: 503px;')
              vom-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown', v-model='item.weeklySpotAllocations', navigator='spotAllocationNavigator')
            td.vui-text-align--right(style='width: 100px;', v-text='item.orderedSpotRate|vuiDecimal', title='$50.00') 50.00
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.orderedRating|vuiDecimal', title='1.10') 1.10
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.videaCurrentRating|vuiDecimal', title='')
            td.vui-text-align--right.currency(style='width: 100px;', v-text='item.lineTotalMoney|vuiDecimal', title='$600.00') 600.00
            td(style='width: 100px;', v-text='item.buyerComment', title='')
            td(style='width: 110px;', v-text='item.stationOrderComment', title='')
            td(style='width: 100px;', v-text='item|vuiSpotOption', title='')
            td(style='width: 100px;', v-text='item.lineType', title='Original') Original
          tr.vui-is-selected(ng-repeat-start='item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc', :class="{'vui-is-selected':item.isExpanded}")
            td.vui-text-align--center(style='width: 80px')
              a(@click='item.isExpanded = !item.isExpanded')
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--right(style='width: 78px', v-if='!item.isOrbit', v-text='item.lineNumber', title='2') 2
            td(style='width: 82px', v-text='item.days|vuiDaysAbbreviation', title='MO-FR') MO-FR
            td.vui-truncate(style='width: 110px', v-text='item.time|vuiTimeRange', title='10 - 10:30pm') 10 - 10:30pm
            td.vui-truncate(style='width: 200px', v-text='item.programName', title='FAMILY GUY') FAMILY GUY
            td(style='width: 88px', v-text='item.spotLength|vuiSeconds', title='15 s') 15 s
            td.vui-text-align--right(style='width: 116px', v-text='item.totalSpots', title='6') 6
            td.vui-text-align--right(style='width: 100px', v-text='item.totalMissedSpots', title='')
            td.vui-text-align--right(style='width: 86px', v-text='item.totalTrafficSpots', title='')
            td.vui-text-align--center(style='width: 140px')
              a.pointer.current-info.popup(@click='showCurrentInfo(item)')
                icon.vui-m-bottom--xxx-small.vui-m-right--xxx-small(name='popout')
            td.spot-allocation-cell(:style="{'width': spotAllocationNavigator.tableCellWidth}", v-if='isShowSpotAllocations', style='width: 503px;')
              vom-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown', v-model='item.weeklySpotAllocations', navigator='spotAllocationNavigator')
            td.vui-text-align--right(style='width: 100px;', v-text='item.orderedSpotRate|vuiDecimal', title='$25.00') 25.00
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.orderedRating|vuiDecimal', title='1.00') 1.00
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.videaCurrentRating|vuiDecimal', title='')
            td.vui-text-align--right.currency(style='width: 100px;', v-text='item.lineTotalMoney|vuiDecimal', title='$150.00') 150.00
            td(style='width: 100px;', v-text='item.buyerComment', title='****BOOKEND****') ****BOOKEND****
            td(style='width: 110px;', v-text='item.stationOrderComment', title='')
            td(style='width: 100px;', v-text='item|vuiSpotOption', title='')
            td(style='width: 100px;', v-text='item.lineType', title='Original') Original
          tr.vui-is-expanded(v-if='item.isExpanded', ng-repeat-end='')
            td.vui-align-top.om-nested-table-container.bordered(colspan='11', style='padding:0')
              nested-order-line-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths', open-makegood='showOfferDialog')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-invoice-details-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-makegoods-grid(items='item.makegoods', order-line-id='item.orderDetailsId', column-widths='expandingMakegoodColumnsWidths', show-offer-dialog='showOfferDialog')
          tr.vui-is-selected(ng-repeat-start='item in items | orderBy:sorting.sortPredicate:sorting.isSortDesc', :class="{'vui-is-selected':item.isExpanded}")
            td.vui-text-align--center(style='width: 80px')
              a(@click='item.isExpanded = !item.isExpanded')
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--right(style='width: 78px', v-if='!item.isOrbit', v-text='item.lineNumber', title='3') 3
            td(style='width: 82px', v-text='item.days|vuiDaysAbbreviation', title='SA') SA
            td.vui-truncate(style='width: 110px', v-text='item.time|vuiTimeRange', title='10 - 10:30pm') 10 - 10:30pm
            td.vui-truncate(style='width: 200px', v-text='item.programName', title='FAMILY GUY                        ') FAMILY GUY
            td(style='width: 88px', v-text='item.spotLength|vuiSeconds', title='15 s') 15 s
            td.vui-text-align--right(style='width: 116px', v-text='item.totalSpots', title='12') 12
            td.vui-text-align--right(style='width: 100px', v-text='item.totalMissedSpots', title='')
            td.vui-text-align--right(style='width: 86px', v-text='item.totalTrafficSpots', title='')
            td.vui-text-align--center(style='width: 140px')
              a.pointer.current-info.popup(@click='showCurrentInfo(item)')
                svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                  use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-popout')
            td.spot-allocation-cell(:style="{'width': spotAllocationNavigator.tableCellWidth}", v-if='isShowSpotAllocations', style='width: 503px;')
              vom-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown', v-model='item.weeklySpotAllocations', navigator='spotAllocationNavigator')
            td.vui-text-align--right(style='width: 100px;', v-text='item.orderedSpotRate|vuiDecimal', title='$25.00') 25.00
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.orderedRating|vuiDecimal', title='1.00') 1.00
            td.vui-text-align--right(style='width: 100px;', v-if='!isImpressionsBuyType', v-text='item.videaCurrentRating|vuiDecimal', title='')
            td.vui-text-align--right.currency(style='width: 100px;', v-text='item.lineTotalMoney|vuiDecimal', title='$300.00') 300.00
            td(style='width: 100px;', v-text='item.buyerComment', title='****BOOKEND****') ****BOOKEND****
            td(style='width: 110px;', v-text='item.stationOrderComment', title='')
            td(style='width: 100px;', v-text='item|vuiSpotOption', title='')
            td(style='width: 100px;', v-text='item.lineType', title='Original') Original
          tr.vui-is-expanded(v-if='item.isExpanded', ng-repeat-end='')
            td.vui-align-top.om-nested-table-container.bordered(colspan='11', style='padding:0')
              nested-order-line-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths', open-makegood='showOfferDialog')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-invoice-details-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-makegoods-grid(items='item.makegoods', order-line-id='item.orderDetailsId', column-widths='expandingMakegoodColumnsWidths', show-offer-dialog='showOfferDialog')
</template>

<script>
  export default {
    data () {
      return {
        isShowSpotAllocations: true,
        expandingColumnsWidths: {
          blank: 0,
          unitAiredStatusName: 80,
          spotNumber: 78,
          programPlaced: 200,
          airTime: 110,
          airDay: 82,
          priority: 88,
          status: 116,
          airDate: 100,
          lineNumber: 86,
          altLineNumber: 60,
          assignedMakegoodId: 73,
          isciAdId: 80,
          invoiceDate: 85,
          externalInvoiceId: 81,
          affidavitRate: 81
        },
        expandingMakegoodColumnsWidths: {
          sellerOfferId: 97,
          statusName: 100,
          confirmDate: 100,
          newMakegoodLines: 100
        }
      }
    },
    methods: {
      getTrafficLogsTableSpan () {
        // Returns colspan value for traffic logs table wrapper based on shown columns
        // of main table.
        return this.isShowSpotAllocations ? 11 : 10
      }
    }
  }
</script>
