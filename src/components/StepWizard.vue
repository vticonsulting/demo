<template lang="jade">
  ol.steps
    li.steps__item.steps__item--done.steps__item--first(:class="{'steps__item--active' : activeTab !== 'market-competitive'}")
      a.steps__link(@click.prevent="setActiveTab('market-competitive')", :class="{'done': activeTab == 'market-competitive' }", style='cursor: pointer') Market Competitive
    li.steps__item.steps__item--done(:class="{'steps__item--active' : activeTab !== 'buyer-ratings'}")
      a.steps__link(@click.prevent="setActiveTab('buyer-ratings')", :class="{'done': activeTab == 'buyer-ratings' }", style='cursor: pointer') Buyer Rating
    li.steps__item.steps__item--last(:class="{'steps__item--active' : activeTab !== 'rates-and-ratings'}")
      a.steps__link(@click.prevent="setActiveTab('rates-and-ratings')", :class="{'done': activeTab == 'rates-and-ratings' }", style='cursor: pointer') Rates and Ratings
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 'market-competitive'
      }
    },

    methods: {
      setActiveTab (tab) {
        this.$dispatch('activate-tab', tab)
        this.activeTab = tab
      }
    }
  }
</script>

