<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.mg-offer-spots
      thead
        tr
          th(style='width: 80px')
            vui-sorting-column(title='Line #', column-name='LineNumber', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 110px')
            vui-sorting-column(title='Order Days', column-name='Days', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 95px')
            vui-sorting-column(title='Start Time', column-name='StartTime', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 95px')
            vui-sorting-column(title='End Time', column-name='EndTime', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 248px')
            vui-sorting-column(title='Program', column-name='ProgramName', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 60px')
            vui-sorting-column(title='Len', column-name='SpotLength', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th.vui-cell-wrap(style='width: 85px')
            vui-sorting-column(title='Offered Spots', column-name='TotalSpots', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th.spot-allocation-column(style='width: 48px;')
            vom-spot-allocation-header(v-model='items[0].spotAllocations', navigator='spotAllocationNavigator')
          th(style='width: 100px')
            vui-sorting-column(title='Spot Rate', column-name='SpotRate', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th.vui-cell-wrap.ng-scope(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Station IMP', column-name='VideaImpressions', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th.ng-scope(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Station CPM', column-name='Cppm', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th.vui-cell-wrap(style='width: 50%;') Makegood Comments
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true,
        items: [
          { }
        ]
      }
    }
  }
</script>
