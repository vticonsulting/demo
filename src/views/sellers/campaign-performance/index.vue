<template lang="pug">
  .campaign-performance-view
    h1.vui-text-heading--large.vui-m-bottom--medium Campaign Performance
    .vui-panel.vui-m-bottom--large
      .vui-panel__heading
        h2.vui-panel__title.vui-align-middle View Selection
      campaign-performance-list-filter(filter='queryParams', apply-filter='applyFilter(filter)')
    .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small(v-show='dataLoaded')
      .vui-align-middle
        span.vui-m-right--medium
          icon.vui-m-right--x-small(name='asterisk', style='color: #3B7F36')
          | ≥ 90%
        span.vui-m-right--medium
          icon.vui-m-right--x-small(name='asterisk', style='color: #F58220')
          | 80%-89%
        span.vui-m-right--medium
          icon.vui-m-right--x-small(name='asterisk', style='color: #C5103D')
          | ≤ 79%
      .vui-align-middle
        .vui-dropdown-trigger
          | Show:
          .vui-dropdown-trigger.vui-m-right--small
            .vui-select_container
              items-per-page-selector(items-per-page='listCtrl.queryParams.pageSize', refresh-data='listCtrl.changeItemsPerPage(itemsPerPage)')
        .vui-dropdown-trigger
          | Columns:
          .vui-dropdown-trigger.vui-m-right--small
            //- vui-multiselect(placeholder='Show/Hide Columns', v-model='listCtrl.gridColumns', display-field='title', value-field='isVisible', @change='listCtrl.updateColumnsVisibility(listCtrl.gridColumns)')
        #excelExporter.vui-dropdown-trigger
          | Export to Excel
          a.vui-button.vui-button--icon-border-filled.vui-p-top--xx-small.vui-m-left--x-small(href='', @click.prevent='')
            icon(name='download')
          span.vui-assistive-text Export to Excel
    div(v-show='dataLoaded')
      .vui-scrollable--x.vui-m-bottom--small
        campaign-performance-list-grid(grid-columns='gridColumns', sorting-changed='sortingChanged', current-sorting='currentSorting', items='items')
      p.vui-text-body--small.vui-m-bottom--xxx-small
        sup 1
        | Nielsen source or data derived from Nielsen
    .vui-align-middle.vui-m-top--x-large.vui-float--right
      back-to-top
    .vui-m-top--x-large(v-show='totalCount > queryParams.pageSize')
      vui-pager(total-items='totalCount', items-per-page='queryParams.pageSize', current-page='queryParams.page', refresh-data='changePage(page)', max-size='10')
</template>

<script>
  import store from 'store'

  export default {
    created () {
      this.sharedState.activeApp = 'sellers'
    },

    data () {
      return {
        sharedState: store.state,
        dataLoaded: true,
        totalCount: 20,
        queryParams: {
          pageSize: 10,
          page: null
        },
        gridColumns: [
        ],
        items: [
        ]
      }
    }
  }
</script>
