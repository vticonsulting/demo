<template lang="pug">
  table.vui-table.vui-no-row-hover.mgs-total-grid
    thead
      tr
        th(v-for='gridColumn in gridColumns', v-text='gridColumn.title', ng-if='gridColumn.isVisible')
    tbody
      tr(v-for='item in items')
        td.vui-truncate(v-text='item.rowName', title='item.rowName', style='width: 155px')
        td.vui-truncate.vui-text-align--right(v-text='item.spotsCount', :title='item.spotsCount', :class="{ 'error': item.spotsCount < 0 }", style='width: 80px')
        td.vui-truncate.vui-text-align--right(v-text='item.rateSum', :title='item.rateSum', :class="{ 'error': item.rateSum < 0 }")
        td.vui-truncate.vui-text-align--right(v-if='!showImpressions', v-text='item.ratings', title='3.10', :class="{ 'error': item.ratings < 0 }")
</template>

<script>
  export default {
    data () {
      return {
        showImpressions: true,
        gridColumns: [
          { title: 'Totals', isVisible: true },
          { title: 'Spots', isVisible: true },
          { title: 'Dollars', isVisible: true },
          { title: 'GRPs', isVisible: true }
        ],
        items: [
          { rowName: 'Credit(s)', spotsCount: 1, rateSum: '0', ratings: '3.10' }
        ]
      }
    }
  }
</script>
