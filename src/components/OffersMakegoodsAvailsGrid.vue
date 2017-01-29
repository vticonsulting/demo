<template lang="pug">
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-missed-spots
        thead
          tr
            th.vui-truncate(style='width: 240px')
              vui-sorting-column(title='Program', column-name='programName', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 102px')
              vui-sorting-column(title='Start Time', column-name='startTime', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 102px')
              vui-sorting-column(title='End Time', column-name='endTime', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 95px')
              vui-sorting-column(title='Days', column-name='days', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 140px')
              vui-sorting-column(title='Daypart', column-name='dayPartName', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 60px')
              vui-sorting-column(title='Len', column-name='spotLength', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 77px')
              vui-sorting-column(title='MG<br>Spots', column-name='totalSpots', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th.spot-allocation-column(style='width: 48px')
              vom-spot-allocation-header(v-model='items[0].spotAllocations', navigator='spotAllocationNavigator')
            th(style='width: 100px')
              vui-sorting-column(title='Spot Rate', column-name='spotRate', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 122px', v-if='isImpressionsBuyType')
              vui-sorting-column(title='Videa<br>Impressions', column-name='videaImpressions', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 85px', v-if='isImpressionsBuyType')
              vui-sorting-column(title='Station<br>CPM', column-name='stationCpm', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 110px')
              vui-sorting-column(title='Makegood<br>Comment', column-name='comment', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 85px')
              vui-sorting-column(title='GDLNS', column-name='gDLNS', sorting-changed='sortingChanged(column)', current-sorting='sorting')
            th(style='width: 255px')
              vui-sorting-column(title='Guidelines Warnings / Violations', column-name='gdlnsWarnings', sorting-changed='sortingChanged(column)', current-sorting='sorting')
        tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        gridColumns: {
          programName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Program', columnName: 'programName' },
          startTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'Start Time', columnName: 'startTime' },
          endTime: { sortable: true, isSorted: false, sortedDesc: false, title: 'End Time', columnName: 'endTime' },
          days: { sortable: true, isSorted: false, sortedDesc: false, title: 'Days', columnName: 'days' },
          dayPartName: { sortable: true, isSorted: false, sortedDesc: false, title: 'Daypart', columnName: 'dayPartName' },
          spotLength: { sortable: true, isSorted: false, sortedDesc: false, title: 'Len', columnName: 'spotLength' },
          totalSpots: { sortable: true, isSorted: false, sortedDesc: false, title: 'MG Spots', columnName: 'totalSpots' },
          spotRate: { sortable: true, isSorted: false, sortedDesc: false, title: 'Spot Rate', columnName: 'spotRate' },
          videaRating: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station Rating', columnName: 'videaRating' },
          videaImpressions: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station IMP', columnName: 'videaImpressions' },
          stationCpp: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station CPP', columnName: 'stationCpp' },
          stationCpm: { sortable: true, isSorted: false, sortedDesc: false, title: 'Station CPM', columnName: 'stationCpm' },
          comment: { sortable: true, isSorted: false, sortedDesc: false, title: 'Makegood Comment', columnName: 'comment' },
          gDLNS: { sortable: true, isSorted: false, sortedDesc: false, title: 'GDLNS', columnName: 'gDLNS' },
          gdlnsWarnings: { sortable: true, isSorted: false, sortedDesc: false, title: 'Guidelines Warnings / Violations', columnName: 'gdlnsWarnings' }
        },
        items: [
          { spotAllocations: [] }
        ]
      }
    }
  }
</script>
