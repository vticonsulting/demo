<template lang="pug">
  .open-preempts-view
    .vui-grid.vui-grid--align-spread
      h1.vui-text-heading--large.vui-m-bottom--medium  Open Pre-Empts
    .vui-panel.vui-m-bottom--large
      .vui-panel__heading
        h2.vui-panel__title Search Open Pre-Empts
      .vui-panel__body
        open-preempts-filter(filter='listCtrl.filter.value()', apply-filter='listCtrl.filterApply', clear-filter='listCtrl.filterClear', is-show-filter-errors='listCtrl.isShowFilterErrors')
    .clearfix
    open-preempts-grid(is-column-sorted='listCtrl.isColumnSorted', sorting-changed='listCtrl.sortingChanged', items='listCtrl.items', open-edit-notes-popup='listCtrl.openEditNotesPopup')
    edit-text-field-popup(save-note='listCtrl.saveNote', open-popup='listCtrl.openEditNotesPopup', popup-title='Open Preempt Note', editing-property-name='customerCareNotes')
    .vui-grid.vui-grid--align-spread.vui-m-top--medium
      .vui-col
      .vui-col
        a(href='', scroll-to-top='', style='cursor: pointer; visibility: visible;')
          | Back to Top
          icon(name='arrow-circle-up')
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
        show: false
      }
    }

  }
</script>
