<!-- <makegoods-preempts-grid items="allMakegoodPreempts" item-selection-changed="selectedPreemptsChanged" order-buy-type="orderInfo.orderBuyType" is-edit-mode="true"> -->
<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout.vui-table--compact.mg-preempts
      thead
        tr
          th(v-if='isEditMode', style='width: 35px') Sel
          th(style='width: 90px')
            vui-sorting-column(title='Air Day', column-name='airDay', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 90px')
            vui-sorting-column(title='Air Time', column-name='airTime', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(:style="{width: isEditMode ? '120px' : '110px'}", style='width: 120px')
            vui-sorting-column(title='Program<br>Placed', column-name='program', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 65px')
            vui-sorting-column(title='Buy<br>Line #', column-name='lineNumber', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th.vui-cell-wrap(style='width: 70px')
            vui-sorting-column(title='Spot #', column-name='spotNumber', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 122px')
            vui-sorting-column(title='Status', column-name='status', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 67px')
            vui-sorting-column(title='Priority', column-name='priority', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 103px')
            vui-sorting-column(title='Air Date', column-name='airDate', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 55px')
            vui-sorting-column(title='Len', column-name='spotLength', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th.spot-allocation-column(style='width: 503px')
            vom-spot-allocation-header(v-model='items[0].spotAllocations', navigator='spotAllocationNavigator')
          th(style='width: 90px')
            vui-sorting-column(title='Spot<br>Rate', column-name='spotRate', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(v-if='isImpressionsBuyType', style='width: 90px')
            vui-sorting-column(title='Buyer<br>IMP', column-name='buyerImpressions', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(v-if='isEditMode', style='width: 90px')
            vui-sorting-column(title='Buyer<br>CPP', column-name='stationCpp', sorting-changed='sortingChanged(column)', current-sorting='sorting')
          th(style='width: 120px') Comment
      tbody
        tr(v-for='item in items')
          td.align-center(v-if='isEditMode', style='width: 35px')
            .checkbox.vui-checkbox.checked(value='item.isSelected', ng-change-function='itemSelectionChanged', ng-change-arg='item', changed='orderLineOnSelected')
              span.icons
              input(type='checkbox')
          td.vui-truncate(style='width: 90px', v-text='item.airDay', :title='item.airDay')
          td.vui-truncate(style='width: 90px', v-text='item.airTime', :title='item.airTime')
          td.vui-truncate(style='width: 120px' v-text='item.programName', :title='item.programName')
          td.vui-truncate.vui-text-align--right(style='width: 65px', v-text='item.lineNumber', :title='item.lineNumber')
          td.vui-truncate.vui-text-align--right(style='width: 70px', :title='item.spotNumber')
            span(v-text='item.spotNumber')
          td.vui-truncate(style='width: 122px', v-text='item.status', :title='item.status')
          td.vui-truncate.vui-text-align--right(style='width: 67px', v-text='item.priority', :title='item.priority')
          td.vui-truncate(style='width: 103px', v-text='item.airDate', :title='item.airDate')
          td.vui-truncate.vui-text-align--center(style='width: 55px', v-text='item.spotLength', :title='item.spotLength')
          td.spot-allocation-cell(style='width: 503px')
            vom-spot-allocation-with-missed-spots(v-model='item.spotAllocations', navigator='spotAllocationNavigator')
          td.vui-truncate.vui-text-align--right(style='width: 90px', v-text='item.spotRate', :title='item.spotRate')
          td.vui-text-align--right(style='width: 90px', v-if='isImpressionsBuyType', v-text='item.buyerImpressions', :title='item.buyerImpressions')
          td.vui-text-align--right(style='width: 90px', v-if='isEditMode', v-text='item.buyerCppm', :title='item.buyerCppm')
          td(style='width: 120px')
            input.vui-input.vui-size--1-of-1(type='text', v-model='item.comment', :title='item.comment', v-if='isEditMode')
</template>
<script>
  export default {
    data () {
      return {
        isEditMode: true,
        isImpressionsBuyType: true,
        items: [
          {
            isSelected: false,
            airDay: 'Thursday',
            airTime: '6:00pm',
            programName: 'Unknown',
            lineNumber: 1,
            spotNumber: 0,
            status: 'Open Preempt',
            priority: null,
            airDate: '09/02/2016',
            spotLength: '30 s',
            spotAllocations: [],
            spotRate: '0',
            buyerImpressions: '8.4',
            buyerCppm: '0',
            comment: ''
          }
        ]
      }
    }
  }
</script>
