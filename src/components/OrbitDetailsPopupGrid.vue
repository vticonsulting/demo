<template lang="pug">
  .vui-scrollable--x
    table.vui-table.vui-no-row-hover.vui-table--fixed-layout
      thead
        tr
          th(style='width: 100px')
            vui-sorting-column(title='Days', column-name='days', current-sorting='ctrl.gridColumns.days', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.days)')
          th(style='width: 100px')
            vui-sorting-column(title='Start Time', column-name='startTime', current-sorting='ctrl.gridColumns.startTime', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.startTime)')
          th(style='width: 100px')
            vui-sorting-column(title='End Time', column-name='endTime', current-sorting='ctrl.gridColumns.endTime', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.endTime)')
          th(style='width: 30%')
            vui-sorting-column(title='Program', column-name='programName', current-sorting='ctrl.gridColumns.programName', on-sorting='ctrl.columnSortingChanged(ctrl.gridColumns.programName)')
      tbody.avails-pulled-table-body
</template>
