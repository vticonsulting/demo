<template lang="pug">
  .fixed-header-grid(style='display: flex; flex-direction: column; position: relative; height: 100%;')
    div(style='overflow: hidden; flex: 0 0 auto; width: 0px;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout(style='position: relative;')
        thead
          tr
            th(style='width: 80px;')
              vui-sorting-column(title='Station<br>Line #', column-name='lineNumber', on-sorting='columnSortingChanged(gridColumns.lineNumber)', current-sorting='gridColumns.lineNumber')
            th(style='width: 80px;')
              | Alt.
              br
              | Line #
            th(style='width: 80px;')
              vui-sorting-column(title='Spot #', column-name='spotNumber', on-sorting='columnSortingChanged(gridColumns.spotNumber)', current-sorting='gridColumns.spotNumber')
            th(style='width: 200px;')
              vui-sorting-column(title='Program Placed', column-name='programName', on-sorting='columnSortingChanged(gridColumns.programPlaced)', current-sorting='gridColumns.programPlaced')
            th(style='width: 198px;')
              vui-sorting-column(title='Status Name', column-name='statusName', on-sorting='columnSortingChanged(gridColumns.statusName)', current-sorting='gridColumns.statusName')
            th(style='width: 80px;')
              vui-sorting-column(title='Priority', column-name='priority', on-sorting='columnSortingChanged(gridColumns.priority)', current-sorting='gridColumns.priority')
            th(style='width: 100px;')
              vui-sorting-column(title='Air Day', column-name='airDay', on-sorting='columnSortingChanged(gridColumns.airDay)', current-sorting='gridColumns.airDay')
            th(style='width: 100px;')
              vui-sorting-column(title='Air Date', column-name='airDate', on-sorting='columnSortingChanged(gridColumns.airDate)', current-sorting='gridColumns.airDate')
            th(style='width: 100px;')
              vui-sorting-column(title='Air Time', column-name='airTime', on-sorting='columnSortingChanged(gridColumns.airTime)', current-sorting='gridColumns.airTime')
            th(style='width: 80px;')
              vui-sorting-column(title='Length', column-name='spotLength', on-sorting='columnSortingChanged(gridColumns.spotLength)', current-sorting='gridColumns.spotLength')
            th(style='width: 100px;')
              vui-sorting-column(title='Rate', column-name='rate', on-sorting='columnSortingChanged(gridColumns.rate)', current-sorting='gridColumns.rate')
            th(style='width: 220px;')
              vui-sorting-column(title='Reason', column-name='currentStateDescription', on-sorting='columnSortingChanged(gridColumns.reason)', current-sorting='gridColumns.reason')
    .vui-scrollable(style='flex: 0 1 auto;')
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout
        tbody
</template>

<script>
  export default {
    data () {
      return {
        gridColumns: {
          lineNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station<br>Line #', columnName: 'lineNumber' },
          altLineNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Alt. Line#', columnName: 'altLineNumber' },
          spotNumber: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spot #', columnName: 'spotNumber' },
          programPlaced: { sortable: true, isSorted: false, sortedDesc: false, title: 'Program Placed', columnName: 'programName' },
          statusName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Status Name', columnName: 'statusName' },
          priority: { sortable: true, isSorted: false, sortedDesc: false, title: 'Priority', columnName: 'priority' },
          airDay: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Day', columnName: 'airDay' },
          airDate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Date', columnName: 'airDate' },
          airTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Air Time', columnName: 'airTime' },
          spotLength: { sortable: true, isSorted: false, sortedDesc: false, title: 'Length', columnName: 'spotLength' },
          rate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Rate', columnName: 'rate' },
          reason: { sortable: true, isSorted: false, sortedDesc: false, title: 'Reason', columnName: 'currentStateDescription' }
        }
      }
    }
  }
</script>
