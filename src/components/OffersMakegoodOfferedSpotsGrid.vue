<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th.vui-cell-wrap(style='width: 80px')
            vui-sorting-column(title='Line #', column-name='lineNumber', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 110px')
            vui-sorting-column(title='Days', column-name='days', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 105px')
            vui-sorting-column(title='Start Time', column-name='startTime', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 105px')
            vui-sorting-column(title='End Time', column-name='endTime', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 235px')
            vui-sorting-column(title='Program', column-name='programName', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 105px')
            vui-sorting-column(title='Len', column-name='spotLength', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th.vui-cell-wrap(style='width: 75px')
            vui-sorting-column(title='Offered Spots', column-name='totalSpots', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th.spot-allocation-column(style='width: 48px;')
            vom-spot-allocation-header(v-model='items[0].spotAllocations', navigator='spotAllocationNavigator')
          th(style='width: 100px')
            vui-sorting-column(title='Station Rate', column-name='spotRate', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Station IMP', column-name='V=videaImpressions', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 90px')
            vui-sorting-column(title='Station CPM', column-name='stationCpp', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 120px;')
            | Makegood
            br
            | Comment
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { spotAllocations: [] }
        ]
      }
    }
  }
</script>
