<template lang="pug">
    .vui-scrollable--x
      table.vui-table.vui-table--striped.vui-no-row-hover.vui-table--fixed-layout
        thead
          tr
            th(style='width: 60px')
              | View
              br
              | Order
            th(style='width: 60px')
              | Create
              br
              | MG's
            th(style='width: 125px')
              | Open Pre-empt
              br
              | Note
            th(style='width: 90px')
              vui-sorting-column(title='Station<br>Order', column-name='OrderNumber', current-sorting='ctrl.gridColumns.orderNumber', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.orderNumber)')
            th(style='width: 106px') Videa Order
            th(style='width: 130px')
              vui-sorting-column(title='Total $<br>Pre-empted', column-name='ProgramSpotUnitRate', current-sorting='ctrl.gridColumns.programSpotUnitRate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.programSpotUnitRate)')
            th(style='width: 110px')
              vui-sorting-column(title='Air Date', column-name='AirDate', current-sorting='ctrl.gridColumns.programSpotIntendedAirDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.programSpotIntendedAirDate)')
            th(style='width: 110px')
              vui-sorting-column(title='Air Time', column-name='AirTime', current-sorting='ctrl.gridColumns.actualStartTime', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.actualStartTime)')
            th(style='width: 120px')
              vui-sorting-column(title='Pre-empt<br>Reason', column-name='CurrentStateDescription', current-sorting='ctrl.gridColumns.currentStateDescription', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.currentStateDescription)')
            th(style='width: 300px')
              vui-sorting-column(title='Agency', column-name='AgencyName', current-sorting='ctrl.gridColumns.agencyName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.agencyName)')
            th(style='width: 250px')
              vui-sorting-column(title='Advertiser', column-name='AdvertiserName', current-sorting='ctrl.gridColumns.advertiserName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.advertiserName)')
            th(style='width: 250px') Campaign Name
            th(style='width: 140px')
              vui-sorting-column(title='C/P/E', column-name='CPE', current-sorting='ctrl.gridColumns.cpe', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.cpe)')
            th(style='width: 116px')
              vui-sorting-column(title='Flight Start', column-name='OrderStartDate', current-sorting='ctrl.gridColumns.orderStartDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.orderStartDate)')
            th(style='width: 110px')
              vui-sorting-column(title='Flight End', column-name='OrderEndDate', current-sorting='ctrl.gridColumns.orderEndDate', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.orderEndDate)')
            th(style='width: 90px') Demo
            th(style='width: 200px') Buyer Name
        tbody
          tr(v-for='item in items')
            td.vui-truncate.vui-text-align--center(style='width: 60px')
              a.pointer.text-underline(title='Click to view this Order', href='/Shared/Sellers/Vom/OrderDetails?videaOrderNumber=V0005014', v-show='item.videaOrderNumber', target='_blank') Open
            td.vui-text-align--center(style='width: 60px')
              a.pointer(title='Click to create a MG Offer', href='/Shared/Sellers/Offers/OfferDetails?videaOrderNumber=V0005014', v-show='item.videaOrderNumber', target='_blank')
                icon(name='medicine-bottle')
            td.vui-text-align--center(style='width: 125px', :title="item.customerCareNotes", @click='openEditNotesPopup(item)')
              a.exists(href='', title='Click to update Customer Care notes', :class="{'exists': item.customerCareNotes, 'notExists': !item.customerCareNotes}")
                icon(name='sticky-note-o')
            td(style='width: 90px', v-text='item.orderNumber', :title='item.orderNumber')
            td(style='width: 106px', v-text='item.videaOrderNumber', :title='item.videaOrderNumber')
            td.vui-text-align--right.currency(style='width: 130px', v-text='item.programSpotUnitRate', :title='item.programSpotUnitRate')
            td.vui-truncate(style='width: 110px', v-text='item.airDateTime', :title='item.airDateTime')
            td.vui-truncate(style='width: 110px', v-text='item.airDateTime', :title='item.airDateTime')
            td(style='width: 120px', v-text='item.currentStateDescription', :title='item.currentStateDescription')
            td.vui-truncate(style='width: 300px', v-text='item.agencyName', :title='item.agencyName')
            td.vui-truncate(style='width: 250px', v-text='item.advertiserName', :title='item.advertiserName')
            td.vui-truncate(style='width: 250px', v-text='item.campaignName', :title='item.campaignName')
            td(style='width: 140px', v-text='item.cpe', :title='item.cpe')
            td(style='width: 116px', v-text='item.orderStartDate', :title='item.orderStartDate')
            td(style='width: 110px', v-text='item.orderEndDate', :title='item.orderEndDate')
            td(style='width: 90px', v-text='item.demo', :title='item.demo')
            td(style='width: 200px', v-text='item.buyerName', :title='item.buyerName')
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: {
          orderNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station<br>Order', columnName: 'OrderNumber' },
          programSpotUnitRate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Total $<br>Pre-empted', columnName: 'ProgramSpotUnitRate' },
          programSpotIntendedAirDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Date', columnName: 'AirDate' },
          actualStartTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Time', columnName: 'AirTime' },
          currentStateDescription: { sortable: true, isSorted: false, sortedDesc: false, title: 'Pre-empt<br>Reason', columnName: 'CurrentStateDescription' },
          agencyName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Agency', columnName: 'AgencyName' },
          advertiserName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Advertiser', columnName: 'AdvertiserName' },
          cpe: { sortable: true, isSorted: false, sortedDesc: false, title: 'C/P/E', columnName: 'CPE' },
          orderStartDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Flight Start', columnName: 'OrderStartDate' },
          orderEndDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Flight End', columnName: 'OrderEndDate' }
        },
        items: [
          {
            orderNumber: '139610',
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
            weeksRemaining: 2,
            programSpotUnitRate: '400',
            airDateTime: '10/22/2016 12:00 am',
            buyerName: 'Kathy Waldman',
            customerCareNotes: 'MARK kelley\'s note as a test. I also updated the open preempt note via the EOM screen.',
            orderStartDate: '06/27/2016',
            orderEndDate: '12/25/2016',
            cpe: 'Y1O/TRU/248',
            campaignName: '2016 NCAA FOOTBALL'
          }
        ]
      }
    },
    methods: {
      openEditNotesPopup (item) {

      }
    }
  }
</script>
