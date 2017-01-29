<template lang="pug">
  .fixed-header-grid(style='display: flex; flex-direction: column; position: relative; height: 100%;')
    div(style='overflow: hidden; flex: 0 0 auto; width: 0px;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(style='position: relative;')
        thead
          tr
            th(style='width: 120px;')
              vui-sorting-column(title='Request Type', column-name='requestType', current-sorting='sorting', column-data='gridColumns.requestType', on-sorting='columnSortingChanged(gridColumns.requestType)')
            th(style='width: 210px;')
              vui-sorting-column(title='Status', column-name='transactionStatusName', current-sorting='sorting', column-data='gridColumns.transactionStatusName', on-sorting='columnSortingChanged(gridColumns.transactionStatusName)')
            th(style='width: 200px;')
              vui-sorting-column(title='User', column-name='userName', current-sorting='sorting', column-data='gridColumns.userName', on-sorting='columnSortingChanged(gridColumns.userName)')
            th(style='width: 150px;')
              vui-sorting-column(title='Date/Time', column-name='transactionDateTime', current-sorting='sorting', column-data='gridColumns.transactionDateTime', on-sorting='columnSortingChanged(gridColumns.transactionDateTime)')
            th(style='width: 100px;')
              vui-sorting-column(title='Iteration', column-name='iterationNumber', current-sorting='sorting', column-data='gridColumns.iterationNumber', on-sorting='columnSortingChanged(gridColumns.iterationNumber)')
            th(style='width: 15%;')
              vui-sorting-column(title='Version', column-name='versionNumber', current-sorting='sorting', column-data='gridColumns.versionNumber', on-sorting='columnSortingChanged(gridColumns.versionNumber)')
    .vui-scrollable(style='flex: 0 1 auto;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: {
          requestType: { sortable: true, isSorted: false, sortedDesc: false, title: 'Request Type', columnName: 'requestType' },
          transactionStatusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Status', columnName: 'transactionStatusName' },
          userName: { sortable: true, isSorted: false, sortedDesc: false, title: 'User', columnName: 'userName' },
          transactionDateTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Date/Time', columnName: 'transactionDateTime' },
          iterationNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Iteration', columnName: 'iterationNumber' },
          versionNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Version', columnName: 'versionNumber' }
        }
      }
    }
  }
</script>
