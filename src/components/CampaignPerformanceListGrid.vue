<template lang="pug">
  table.vui-table
    thead
      tr
        th.vui-cell-wrap(v-for='column in gridColumns', v-show='column.isVisible', :style="{ 'max-width':column.width, 'min-width':column.width }")
          vui-sorting-column(:title='column.label', :column-name='column.label', :current-sorting='column.currentSorting', sorting-changed='sortingChanged(column)', :sortable='column.sortable')
    tbody(v-show='items && items.length')
      tr(v-for='item in items')
        td.vui-truncate(v-show='columns.stationOrderNumber.isVisible', :title='item.stationOrderNumber')
          a(href='/Shared/Sellers/CampaignPerformance#/Details?orderId=5004') {{ item.stationOrderNumber }}
        td.vui-truncate(v-show='columns.videaOrderNumber.isVisible', :title='item.videaOrderNumber')
          a(href='/Shared/Sellers/CampaignPerformance#/Details?orderId=5004') {{ item.videaOrderNumber }}
        td.vui-truncate(v-show='columns.advertiser.isVisible', :title='item.advertiserName') {{ item.advertiserName }}
        td.vui-truncate(v-show='columns.agency.isVisible', :title='item.agencyName') {{ item.agencyName }}
        td.vui-truncate(v-show='columns.product.isVisible', :title='item.productName') {{ item.productName }}
        td.vui-truncate.vui-text-align--right(v-show='columns.estimateNumber.isVisible', :title='item.estimate') {{ item.estimate }}
        td.vui-truncate.vui-text-align--right(v-show='columns.revenue.isVisible', :title='item.revenue') {{ item.revenue }}
        td.vui-truncate(v-show='columns.flightStart.isVisible', :title='item.flightStartDate ') {{ item.flightStartDate }}
        td.vui-truncate(v-show='columns.flightEnd.isVisible', :title='item.flightEndDate') {{ item.flightEndDate }}
        td.vui-truncate(v-show='columns.campaignDelivery.isVisible')
          //- campaign-delivery-indicator(value='item.campaignDelivery', ahead-threshold='90', target-threshold='80')
          //-   div(v-if='value == null')
          //-     span.vui-float--left N/A
        td.vui-truncate.vui-text-align--right(v-show='columns.currentRtgsImps.isVisible', :title='item.currentGrpsImps') {{ item.currentGrpsImps }}
        td.vui-truncate.vui-text-align--right(v-show='columns.purchasedGrpsImpsToDate.isVisible', :title='item.purchasedGrpsImps') {{ item.purchasedGrpsImps }}
        td.vui-truncate.vui-text-align--right(v-show='columns.difference.isVisible', :title='item.difference') {{ item.difference }}
        td.vui-truncate.vui-text-align--right(v-show='columns.currentHhGrpsImps.isVisible', :title='item.currentHouseholdGrpsImps') {{ item.currentHouseholdGrpsImps }}
        td.vui-truncate.vui-text-align--right(v-show='columns.totalPurchasedGrpsImps.isVisible', :title='item.totalPurchasedGrpsImps') {{ item.totalPurchasedGrpsImps }}
        td.vui-truncate.vui-text-align--right(v-show='columns.demo.isVisible', :title='item.demoName') {{ item.demoName }}
        td.vui-truncate.vui-text-align--right(v-show='columns.weeksRemaining.isVisible', :title='item.weeksRemaining') {{ item.weeksRemaining }}
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: [
          { isVisible: true, width: '100px', field: 'stationOrderNumber', label: 'Station Order #', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'videaOrderNumber', label: 'Videa Order #', currentSorting: '', sortable: true },
          { isVisible: true, field: 'advertiser', label: 'Advertiser', currentSorting: '', sortable: true },
          { isVisible: true, field: 'agency', label: 'Agency', currentSorting: '', sortable: true },
          { isVisible: true, field: 'product: ', label: 'Product', currentSorting: '', sortable: true },
          { isVisible: true, width: '80px', field: 'estimateNumber', label: 'Est. #', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'revenue', label: 'Revenue', currentSorting: '', sortable: true },
          { isVisible: true, field: 'flightStart', label: 'Flight Start', currentSorting: '', sortable: true },
          { isVisible: true, field: 'flightEnd', label: 'Flight End', currentSorting: '', sortable: true },
          { isVisible: true, field: 'campaignDelivery', label: 'Campaign Delivery %', currentSorting: '', sortable: true },
          { isVisible: true, width: '110px', field: 'currentRtgsImps', label: 'Current RTGs/IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '130px', field: 'purchasedGrpsImpsToDate', label: 'Purchased GRPs/IMPs To Date', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'difference', label: '+/-', currentSorting: '', sortable: true },
          { isVisible: true, width: '115px', field: 'currentHhGrpsImps', label: 'Current HH GRPs/IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '130px', field: 'totalPurchasedGrpsImps', label: 'Total Purchased GRPs/ IMPs', currentSorting: '', sortable: true },
          { isVisible: true, width: '100px', field: 'demo', label: 'Demo', currentSorting: '', sortable: true },
          { isVisible: true, width: '120px', field: 'weeksRemaining', label: 'Weeks Remainining', currentSorting: '', sortable: true }
        ],
        columns: {
          stationOrderNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          videaOrderNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          advertiser: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          agency: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          product: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          estimateNumber: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          revenue: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          flightStart: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          flightEnd: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          campaignDelivery: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          currentRtgsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          purchasedGrpsImpsToDate: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          difference: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          currentHhGrpsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          totalPurchasedGrpsImps: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          demo: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true },
          weeksRemaining: { isVisible: true, width: '100px', label: '', field: '', currentSorting: '', sortable: true }
        },
        items: [
          {
            stationOrderNumber: '5004',
            videaOrderNumber: 'V0005004',
            advertiserName: 'WHATABURGER',
            agencyName: 'KSM AUSTIN',
            productName: 'CORPORATE',
            estimate: '0016',
            revenue: '5230',
            flightStartDate: '09/26/2016',
            flightEndDate: '12/25/2016',
            currentGrpsImps: '',
            purchasedGrpsImps: '',
            difference: '',
            currentHouseholdGrpsImps: '',
            totalPurchasedGrpsImps: '88.3',
            demoName: ' P18-49',
            weeksRemaining: 2
          }
        ]
      }
    }
  }
</script>
