<template lang="pug">
  .vui-grid.vui-grid--align-spread.vui-m-bottom--xx-small
    .vui-align-middle
      campaign-performance-legend
    .vui-align-middle
      .vui-dropdown-trigger
        | Show:
        .vui-dropdown-trigger.vui-m-right--small
          .vui-select_container
            items-per-page-selector(
              items-per-page = 'listCtrl.queryParams.pageSize'
              refresh-data = 'listCtrl.changeItemsPerPage(itemsPerPage)'
            )
      .vui-dropdown-trigger
        | Columns:
        .vui-dropdown-trigger.vui-m-right--small
          //- multiselect(
          //-   v-model="value",
          //-   :options="options",
          //-   :multiple="true",
          //-   :close-on-select="false",
          //-   :clear-on-select="false",
          //-   :hide-selected="true",
          //-   placeholder="Pick some"
          //-   label="name",
          //-   track-by="name"
          //- )
          //- vui-multiselect(placeholder='Show/Hide Columns', v-model='listCtrl.gridColumns', display-field='title', value-field='isVisible', @change='listCtrl.updateColumnsVisibility(listCtrl.gridColumns)')
      #excelExporter.vui-dropdown-trigger
        | Export to Excel
        button.vui-button.vui-button--icon-border-filled.vui-m-left--x-small
          icon(
            name = 'download'
            style = 'width: 1.5rem; height: 1.5rem; color: #0177a2'
          )
        span.vui-assistive-text Export to Excel
</template>

<script>
  import CampaignPerformanceLegend from '~components/campaign-performance/campaign-performance-legend'

  export default {
    components: {
      CampaignPerformanceLegend
    }
  }
</script>
