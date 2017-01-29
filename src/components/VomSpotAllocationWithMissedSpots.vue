<!-- <vom-spot-allocation-with-missed-spots ng-model="item.spotAllocations" navigator="ctrl.spotAllocationNavigator" class="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-not-empty"> -->
<template lang="pug">
  .spot-allocation-row
    .spot-allocation-container.spot-allocation-data(:style="{ 'width': spotsWidth }")
      ul.spot-allocation(style='left: 0')
        li(v-for='spot in spots', :class="{'hiatus-spot': spot.isHiatus}")
          div
            span
              span(v-text='spot.value')
</template>

<script>
  export default {
    data () {
      return {
        spotsWidth: '455px',
        spots: [
          { week: '06/27/2016', value: 1, isHiatus: false },
          { week: '07/04/2016', value: 1, isHiatus: false },
          { week: '07/11/2016', value: 1, isHiatus: false },
          { week: '07/18/2016', value: 1, isHiatus: false },
          { week: '07/25/2016', value: 1, isHiatus: false },
          { week: '08/01/2016', value: 1, isHiatus: false },
          { week: '08/08/2016', value: 1, isHiatus: false },
          { week: '08/15/2016', value: 1, isHiatus: false },
          { week: '08/22/2016', value: 1, isHiatus: false },
          { week: '08/29/2016', value: 1, isHiatus: false },
          { week: '09/05/2016', value: 1, isHiatus: false },
          { week: '09/12/2016', value: 1, isHiatus: false },
          { week: '09/19/2016', value: 1, isHiatus: false }
        ]
      }
    },
    methods: {
      scrollLeft () {},
      scrollRight () {}
    }
  }
</script>
