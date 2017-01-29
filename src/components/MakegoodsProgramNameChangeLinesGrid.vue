<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--striped.vui-table--fixed-layout.mg-program-name-change
      thead
        tr
          th.vui-text-align--center(v-if='isEditMode', style='width: 48px;') Select
          th(style='width: 110px;')
            vui-sorting-column(title='Order Days', column-name='days', current-sorting='sorting')
          th(style='width: 95px;')
            vui-sorting-column(title='Start Time', column-name='startTime', current-sorting='sorting')
          th(style='width: 95px;')
            vui-sorting-column(title='End Time', column-name='endTime', current-sorting='sorting')
          th(style='width: 220px;')
            vui-sorting-column(title='Program', column-name='programName', current-sorting='sorting')
          th(style='width: 70px;')
            vui-sorting-column(title='Line', column-name='lineNumber', current-sorting='sorting')
          th(style='width: 55px;')
            vui-sorting-column(title='Len', column-name='spotLength', current-sorting='sorting')
          th.vui-cell-wrap(style='width: 80px;')
            vui-sorting-column(title='Ordered Spots', column-name='totalSpots', current-sorting='sorting')
          th.spot-allocation-column(style='width: 503px;')
            vom-spot-allocation-header(v-model='items[0].spotAllocations', navigator='spotAllocationNavigator')
          th(style='width: 100px;')
            vui-sorting-column(title='Spot Rate', column-name='orderedSpotRate', current-sorting='sorting')
          th(style='width: 100px;', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Buyer IMP', column-name='orderedImpressions', current-sorting='sorting')
          th(style='width: 100px', v-if='isImpressionsBuyType')
            vui-sorting-column(title='Buyer CPM', column-name='Cppm', sorting-changed='columnSortingChanged(column)', current-sorting='sorting')
          th(style='width: 50%;')
            vui-sorting-column(title='Line $ Total', column-name='lineTotalMoney', current-sorting='sorting')
      tbody
        tr(v-for='item in items')
          td.vui-text-align--center(v-if='isEditMode', style='width: 48px')
            .checkbox.vui-checkbox(value='item.isSelected')
              span.icons
                span.vui-checkbox-unchecked
                  //- i.glyphicon.glyphicon-ok
                span.vui-checkbox-checked
                  //- i.glyphicon.glyphicon-ok
              input(type='checkbox', :disabled='cbdisabled')
              label(ng-bind='text', :disabled='cbdisabled', :class="{'pull-left': labelOnLeft}", :style="labelOnLeft ? { 'margin-right': '7px' } : {}")
          td.vui-truncate(style='width: 110px', v-text='item.days', :title='item.days')
          td.vui-truncate(style='width: 95px', v-text='item.startTime', :title='item.startTime')
          td.vui-truncate(style='width: 95px', v-text='item.endTime', :title='item.endTime')
          td.vui-truncate(style='width: 220px', v-text='item.programName', :title='item.programName')
          td.vui-truncate.vui-text-align--right(style='width: 70px', v-text='item.lineNumber', :title='item.lineNumber')
          td.vui-truncate.vui-text-align--right(style='width: 55px', v-text='item.spotLength', :title='item.spotLength')
          td.vui-truncate.vui-text-align--right(style='width: 80px', v-text='item.totalSpots', :title='item.totalSpots')
          td.spot-allocation-cell(style='width: 503px')
            vom-spot-allocation-with-missed-spots(v-model='item.spotAllocations', navigator='spotAllocationNavigator')
          td.vui-truncate.vui-text-align--right(style='width: 100px', v-text='item.orderedSpotRate', :title='item.orderedSpotRate')
          td.vui-truncate.vui-text-align--right(style='width: 100px', v-if='isImpressionsBuyType', v-text='item.orderedImpressions', :title='item.orderedImpressions')
          td.vui-truncate.vui-text-align--right(style='width: 100px', v-text='item.orderedCppm', :title='item.orderedCppm')
          td.vui-truncate.vui-text-align--right(style='width: 50%', v-text='item.lineTotalMoney', :title='item.lineTotalMoney')
</template>

<script>
  export default {
    data () {
      return {
        isEditMode: false,
        isImpressionsBuyType: true,
        items: [
          {
            isExpanded: false,
            isSelected: false,
            firstSentMakegood: null,
            firstDraftMakegood: null,
            totalMissedSpots: 1,
            isOrbit: true,
            lineNumber: 1,
            days: 'MO-FR',
            time: '6 - 6:30pm',
            startTime: '6:00 pm',
            endTime: '6:30 pm',
            programName: ' FOX NEWS AT',
            spotLength: '30 s',
            totalSpots: 1,
            totalTrafficSpots: 1,
            weeklySpotAllocations: [],
            orderedSpotRate: '0',
            orderedImpressions: ' 8.4',
            videaCurrentImpressions: '',
            lineTotalMoney: '0',
            buyerComment: '',
            stationOrderComment: '',
            lineType: 'Original'
          }
        ]
      }
    }
  }
</script>
