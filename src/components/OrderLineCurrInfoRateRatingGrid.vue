<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(style='width: 180px')
            vui-sorting-column(title='Program', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Program","columnName":"program"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.program)')
          th(style='width: 90px')
            vui-sorting-column(title='Time', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Time","columnName":"time"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.time)')
          th(style='width: 80px')
            vui-sorting-column(title='Days', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Days","columnName":"days"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.days)')
          th(style='width: 56px')
            vui-sorting-column(title='Len', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Len","columnName":"spotLength"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.spotLength)')
          th(style='width: 95px')
            vui-sorting-column(title='Start Date', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Start Date","columnName":"startDate"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.startDate)')
          th(style='width: 90px')
            vui-sorting-column(title='End Date', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"End Date","columnName":"endDate "}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.endDate)')
          th(style='width: 80px')
            vui-sorting-column(title='Current<br>Rate', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Current<br>Rate","columnName":"videaCurrentSpotRate"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.videaCurrentSpotRate)')
          th(style='width: 80px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Current<br>IMP', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Current<br>IMP","columnName":"videaCurrentImpressions"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.videaCurrentImpressions)')
          th(style='width: 125px')
            vui-sorting-column(title='Ordered vs<br>Current Rate', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Ordered vs<br>Current Rate","columnName":"orderVsCurrentRateDeviation"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.orderVsCurrentRateDeviation)')
          th(style='width: 125px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Ordered vs<br>Current IMP', column-name='{"sortable":true,"isSorted":false,"sortedDesc":false,"title":"Ordered vs<br>Current IMP","columnName":"orderVsCurrentImpressionsDeviation"}', current-sorting='sorting', on-sorting='columnSortingChanged(gridColumns.orderVsCurrentImpressionsDeviation)')
      tbody
</template>

<script>
  export default {
    data () {
      return {
        isImpressionsBuyType: true
      }
    }
  }
</script>
