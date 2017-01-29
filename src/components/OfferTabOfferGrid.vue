<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(style='width: 62px') Select
          th(style='width: 52px')
            | View
            br
            | Offer
          th(style='width: 107px')
            vui-sorting-column(title='Date<br>Offer Sent', column-name='sentDate', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.sentDate)')
          th(style='width: 92px')
            vui-sorting-column(title='Offer<br>Number', column-name='offerNumber', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.offerNumber)')
          th(style='width: 89px')
            vui-sorting-column(title='Offer<br>Version', column-name='offerVersion', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.offerVersion)')
          th(style='width: 120px')
            vui-sorting-column(title='Offer<br>Type', column-name='transactionType', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.transactionType)')
          th(style='width: 100px')
            vui-sorting-column(title='Offer<br>Status', column-name='offerStatusName', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.offerStatusName)')
          th(style='width: 100px')
            vui-sorting-column(title='Accepted<br>by Agency', column-name='agencyStatusName', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.agencyStatusName)')
          th(style='width: 80px')
            | Agency
            br
            | Notes
          th(style='width: 100px')
            vui-sorting-column(title='Accepted<br>by Station', column-name='stationStatusName', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.stationStatusName)')
          th(style='width: 80px')
            | Station
            br
            | Notes
          th(style='width: 80px')
            | Transfer
            br
            | Status
          th(style='width: 400px')
            | Makegood
            br
            | comments
          th(style='width: 30%')
            | Customer Care
            br
            | Internal Notes
      tbody
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: {
          sentDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Date Offer Sent', columnName: 'sentDate' },
          offerNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Offer Number', columnName: 'offerNumber' },
          offerVersion: { sortable: true, isSorted: false, sortedDesc: false, title: 'Offer Version', columnName: 'offerVersion' },
          transactionType: { sortable: true, isSorted: false, sortedDesc: false, title: 'Offer Type', columnName: 'transactionType' },
          offerStatusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Offer Status', columnName: 'offerStatusName' },
          agencyStatusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Accepted by Agency', columnName: 'agencyStatusName' },
          stationStatusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Accepted by Station', columnName: 'stationStatusName' },
          createdByName: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG created by', columnName: 'createdByName' },
          createdDateTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Date/Time created', columnName: 'createdDateTime' },
          updatedByName: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG last updated by', columnName: 'updatedByName' },
          updatedDateTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Date/Time last updated', columnName: 'updatedDateTime' }
        }
      }
    }
  }
</script>
