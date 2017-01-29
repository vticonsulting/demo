<template lang="pug">
  .campaign-performance-details-view
    ui-title(style = 'margin-bottom: 0') Campaign Performance Details
    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
      a(
        @click.prevent = 'showCampaigns'
      )
        icon.vui-align-middle(
          name = 'arrow-circle-left'
        )
        span.vui-align-middle Back to Campaign Performance

    ui-subtitle {{ campaign.advertiser }} {{ campaign.product }} {{campaign.estimateNumber }}

    //- campaign-performance-details-info(
    //-   v-bind:campaign = 'campaign'
    //- )
    campaign-performance-details-daypart-summary(
      v-bind:campaign = 'campaign'
    )

    ui-panel
      campaign-performance-details-filter

    ui-subtitle Spot Detail
    daypart-selector
    campaign-performance-details-spot-details-grid-controls
    campaign-performance-details-spot-details-grid
    campaign-performance-details-spot-details-grid-footer

</template>
<script>
  import axios from '~plugins/axios'

  import CampaignPerformanceDetailsSpotDetailsGridControls from '~components/campaign-performance/campaign-performance-details-spot-details-grid-controls'
  import CampaignPerformanceDetailsSpotDetailsGridFooter from '~components/campaign-performance/campaign-performance-details-spot-details-grid-footer'
  import CampaignPerformanceDetailsSpotDetailsGrid from '~components/campaign-performance/campaign-performance-details-spot-details-grid'
  import CampaignPerformanceDetailsDaypartSummary from '~components/campaign-performance/campaign-performance-details-daypart-summary'
  import CampaignPerformanceDetailsFilter from '~components/campaign-performance/campaign-performance-details-filter'
  import CampaignPerformanceDetailsInfo from '~components/campaign-performance/campaign-performance-details-info'

  export default {
    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    props: {
      campaignsRoute: {
        type: String,
        default: 'sellers-campaign-performance'
      }
    },

    async data ({ env, params }) {
      let { data } = await axios.get(`/campaigns/${params.id}`)
      return { campaign: data }
    },

    methods: {
      showCampaigns () {
        this.$router.push({
          name: this.campaignsRoute
        })
      }
    },

    components: {
      CampaignPerformanceDetailsSpotDetailsGridControls,
      CampaignPerformanceDetailsSpotDetailsGridFooter,
      CampaignPerformanceDetailsSpotDetailsGrid,
      CampaignPerformanceDetailsDaypartSummary,
      CampaignPerformanceDetailsFilter,
      CampaignPerformanceDetailsInfo
    }
  }
</script>
