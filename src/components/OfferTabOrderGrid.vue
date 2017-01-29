<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
      thead
        tr
          th(style='width: 41px')
          th(style='width: 48px') Sent
          th(style='width: 52px') Draft
          th(style='width: 68px') Select
          th(style='width: 74px')
            vui-sorting-column(title='Line #', column-name='lineNumber', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.lineNumber)')
          th(style='width: 70px')
            vui-sorting-column(title='Days', column-name='days', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.days)')
          th(style='width: 110px')
            vui-sorting-column(title='Time', column-name='time', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.time)')
          th.vui-truncate(style='width: 200px')
            vui-sorting-column(title='Program', column-name='programName', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.programName)')
          th(style='width: 83px')
            vui-sorting-column(title='Length', column-name='spotLength', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.spotLength)')
          th(style='width: 92px')
            vui-sorting-column(title='Ordered<br>Spots', column-name='totalSpots', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.totalSpots)')
          th(style='width: 88px')
            vui-sorting-column(title='Missed<br>Spots', column-name='totalMissedSpots', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.totalMissedSpots)')
          th(style='width: 82px')
            vui-sorting-column(title='Traffic<br>Spots', column-name='totalTrafficSpots', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.totalTrafficSpots)')
          th(style='width: 140px')
            | Current
            br
            | Information
          th.spot-allocation-column(v-if='isShowSpotAllocations', style='width: 503px')
            vom-spot-allocation-header(v-model='items[0].weeklySpotAllocations', navigator='spotAllocationNavigator')
          th(style='width: 100px')
            vui-sorting-column(title='Spot Rate', column-name='orderedSpotRate', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.orderedSpotRate)')
          th(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Buyer<br>IMP', column-name='orderedImpressions', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.orderedImpressions)')
          th(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Videa<br>IMP', column-name='videaCurrentImpressions', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.videaCurrentImpressions)')
          th(style='width: 100px')
            vui-sorting-column(title='Line<br>$ Total', column-name='lineTotalMoney', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.lineTotalMoney)')
          th(style='width: 100px')
            | Buyer
            br
            | Comment
          th(style='width: 132px')
            | Station
            br
            | Order Comment
          th(style='width: 100px') Spot Option
          th(style='width: 100px') Line Type
      tbody
        template(v-for='item in items', v-show='!isOnlyMissedShown || item.totalMissedSpots > 0', :class="{ 'vui-is-selected': item.isExpanded }")
          tr
            td(style='width: 41px')
              a(@click='item.isExpanded = !item.isExpanded')
                //- svg.vui-icon.vui-icon--small.vui-m-bottom--xxx-small.vui-m-right--xxx-small
                //-   use(v-if='item.isExpanded', xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/Content/Images/icons.svg#icon-caret-down')
            td.vui-text-align--center(style='width: 48px')
              a.vui-m-right--xx-small(href='', title='Click to open the Offer which has been sent and is awaiting approval', @click='showOfferDialog(item.firstSentMakegood)', v-show='item.firstSentMakegood')
                icon('medicine-bottle')
            td.vui-text-align--center(style='width: 52px')
              a(title='Indicates this Buy Line has DRAFT Offers', @click='showOfferDialog(item.firstDraftMakegood)', v-show='item.firstDraftMakegood')
                icon(name='pencil-square')
            td.vui-text-align--center.overflow-visible(style='width: 68px')
              label.vui-checkbox(title='Select to include in Offer', v-if='isCheckboxVisible(item)')
                input.vui-input(type='checkbox', v-model='item.isSelected', @change='orderLineOnSelected(item)')
                span.vui-checkbox--faux
            td.vui-text-align--right(style='width: 74px', v-if='!item.isOrbit', v-text='item.lineNumber', :title='item.lineNumber')
            td.vui-truncate(style='width: 70px', v-text='item.days', :title='item.days')
            td.vui-truncate(style='width: 110px', v-text='item.time', :title='item.time')
            td.vui-truncate(style='width: 200px', v-text='item.programName', :title='item.programName')
            td.vui-text-align--center(style='width: 83px', v-text='item.spotLength', :title='item.spotLength')
            td.vui-text-align--right(style='width: 92px', v-text='item.totalSpots', :title='item.totalSpots')
            td.vui-text-align--right.vui-text-color--error(style='width: 88px', v-text='item.totalMissedSpots', :title='item.totalMissedSpots')
            td.vui-text-align--right(style='width: 82px', v-text='item.totalTrafficSpots', :title='item.totalTrafficSpots')
            td.vui-text-align--center(style='width: 140px')
              a(title='Click to see current rates & ratings and matched Avails', @click='showCurrentInfo(item)')
                icon(name='popout')
            td.spot-allocation-cell(v-if='isShowSpotAllocations', style='width: 503px')
              vom-spot-allocation-with-missed-spots(v-if='isMissedSpotsShown', v-model='item.weeklySpotAllocations', navigator='spotAllocationNavigator')
            td.vui-text-align--right.currency(style='width: 100px', v-text='item.orderedSpotRate', :title='item.orderedSpotRate')
            td.vui-text-align--right(style='width: 100px', v-if='isImpressionsBuyType', v-text='item.orderedImpressions', :title='item.orderedImpressions')
            td.vui-text-align--right(style='width: 100px', v-if='isImpressionsBuyType', v-text='item.videaCurrentImpressions', :title='item.videaCurrentImpressions')
            td.vui-text-align--right.currency(style='width: 100px', v-text='item.lineTotalMoney', :title='item.lineTotalMoney')
            td.vui-truncate(style='width: 100px', v-text='item.buyerComment', :title='item.buyerComment')
            td.vui-truncate(style='width: 132px', v-text='item.stationOrderComment', :title='item.stationOrderComment')
            td(style='width: 100px', title='')
            td(style='width: 100px', v-text='item.lineType', :title='item.lineType')
          tr.vui-is-expanded(v-if='item.isExpanded', v-show='!isOnlyMissedShown || item.totalMissedSpots > 0')
            td.vui-align-top.om-nested-table-container.bordered(colspan='14', style='padding:0')
              nested-order-line-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths', is-items-selectable='isChildCheckboxVisible()', order-line-child-selected='orderLineChildSelected(item)', open-makegood='showOfferDialog')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-invoice-details-grid(child-items='item.child', order-line-id='item.orderDetailsId', spot-allocation-navigator='spotAllocationNavigator', is-show-spot-allocations='isShowSpotAllocations', column-widths='expandingColumnsWidths', is-items-selectable='isChildCheckboxVisible()', order-line-child-selected='orderLineChildSelected(item)')
                .vui-box(style='padding: 0.5rem; border: none; border-top: 1px solid #51535c')
                  h3.vui-text-heading--label Agency Invoice Details
                div
                  table.vui-table.vui-no-row-hover.vui-table--fixed-layout(cg-busy='promise')
                    caption
                    thead
                      tr
                        th.vui-truncate(:style="{'width': columnWidths.isciAdId}", style='border-left: 1px solid rgb(81, 83, 92); width: 100px')
                          | ISCI
                          br
                          | AD ID
                        th.vui-truncate(:style="{'width': columnWidths.invoiceDate}", style='width: 100px')
                          | Station
                          br
                          | Inv Date
                        th.vui-truncate(:style="{'width': columnWidths.affidavitRate}", style='width: 99px')
                          | Station
                          br
                          | Inv Amt
                        th.vui-truncate(:style="{'width': columnWidths.externalInvoiceId}", style='width: 99px')
                          | Station
                          br
                          | Inv #
                    tbody
                      tr(v-for='item in childItems')
                        td(v-text='item.isciAdId', title='', style='border-left: 1px solid #51535c;height: 2.5rem')
                        td.vui-truncate(v-text='item.invoiceDate|vuiDate', title='')
                        td.vui-truncate.vui-text-align--right(v-text='item.detailsAffidavitRate|vuiDecimal', title='', :class="{'currency': item.detailsAffidavitRate}")
                        td.vui-truncate(v-text='item.externalInvoiceId', title='')
            td.vui-align-top.om-nested-table-container.bordered(colspan='4', style='padding:0')
              nested-order-line-makegoods-grid(items='item.makegoods', order-line-id='item.orderDetailsId', column-widths='expandingMakegoodColumnsWidths', show-offer-dialog='showOfferDialog')
</template>

<script>
  export default {
    data () {
      return {
        isShowSpotAllocations: true,
        isImpressionsBuyType: true,
        isOnlyMissedShown: true,
        isMissedSpotsShown: false,
        gridColumns: {
          lineNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Line#', columnName: 'lineNumber' },
          programName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Program', columnName: 'programName' },
          time: { sortable: true, isSorted: false, sortedDesc: false, title: 'Time', columnName: 'time' },
          days: { sortable: true, isSorted: false, sortedDesc: false, title: 'Days', columnName: 'days' },
          spotLength: { sortable: true, isSorted: false, sortedDesc: false, title: 'Length', columnName: 'spotLength' },
          totalSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'Ordered Spots', columnName: 'totalSpots' },
          totalMissedSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'Missed Spots', columnName: 'totalMissedSpots' },
          totalTrafficSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'Traffic Spots', columnName: 'totalTrafficSpots' },
          startDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Start Date', columnName: 'startDate' },
          endDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'End Date', columnName: 'endDate' },
          orderedSpotRate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spot Rate', columnName: 'orderedSpotRate' },
          orderedRating: { sortable: true, isSorted: false, sortedDesc: false, title: 'Buyer RTG', columnName: 'orderedRating' },
          videaCurrentRating: { sortable: true, isSorted: false, sortedDesc: false, title: 'Videa RTG', columnName: 'videaCurrentRating' },
          orderedImpressions: { sortable: true, isSorted: false, sortedDesc: false, title: 'Buyer IMP', columnName: 'orderedImpressions' },
          videaCurrentImpressions: { sortable: true, isSorted: false, sortedDesc: false, title: 'Videa IMP', columnName: 'videaCurrentImpressions' },
          lineTotalMoney: { sortable: true, isSorted: false, sortedDesc: false, title: 'Line $ Total', columnName: 'lineTotalMoney' }
        },
        items: [
          {
            isExpanded: false,
            isSelected: false,
            firstSentMakegood: null,
            firstDraftMakegood: null,
            totalMissedSpots: 1,
            isOrbit: true,
            lineNumber: 1,
            days: 'MO-FR',
            time: '6 - 6:30pm',
            programName: ' FOX NEWS AT',
            spotLength: '30 s',
            totalSpots: 1,
            totalTrafficSpots: 1,
            weeklySpotAllocations: [],
            orderedSpotRate: '0',
            orderedImpressions: ' 8.4',
            videaCurrentImpressions: '',
            lineTotalMoney: '0',
            buyerComment: '',
            stationOrderComment: '',
            lineType: 'Original'
          }
        ]
      }
    },
    methods: {
      isCheckboxVisible (item) {},
      orderLineOnSelected (item) {},
      showCurrentInfo (item) {}
    }
  }
</script>
