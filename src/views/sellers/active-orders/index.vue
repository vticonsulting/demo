<template lang="pug">
  .active-orders-view
    h1.vui-text-heading--large.vui-m-bottom--medium Active Orders Dashboard
    active-orders-filter(filter='filter.value()', apply-filter='filterApply', clear-filter='filterClear', is-dates-valid='isDatesValid')

    active-orders-grid(is-column-sorted='isColumnSorted', sorting-changed='sortingChanged', items='items')
    .table-footer-row
      .vui-pagination(total-items='totalItems', items-per-page='itemsPerPage', current-page='currentPage', refresh-data='refreshData')
        .vui-show--inline-block.vui-m-right--large
          span 1
        .vui-show--inline-block
          //- ul.pagination(total-items='totalItems', items-per-page='itemsPerPage', @change='changeFunction', max-size='_maxSize', previous-text='', next-text='', boundary-links='false', rotate='false', num-pages='numPages')
          //-   li.pagination-prev(v-if='directionLinks')
          //-     a(href='', @click='selectPage(page - 1)') 
          //-   li.pagination-page(v-for='(page, index) in pages')
          //-     a(href='', @click='selectPage(page.number)') 1
          //-   li.pagination-next(v-if='directionLinks')
          //-     a(href='', @click='selectPage(page + 1)') 
    .vui-grid.vui-grid--align-end
      input.vui-button.vui-button--brand(type='button', value='Save', @click='complete', :disabled='!hasChangedCompletionOrders')
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
        currentPage: 1,
        directionLinks: true,
        hasChangedCompletionOrders: true,
        pages: [
          { active: true, number: 1 },
          { active: false, number: 2 }
        ]
      }
    },

    methods: {
      changeFunction () {},
      complete () {}
    }
  }
</script>
