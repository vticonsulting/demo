<template lang="jade">
.vui-scrollable--x.vui-m-bottom--large
  #daypart-selector
    button.vui-button.vui-max-small-buttons--stretch(v-for='($index, daypart) in dayparts', @click.prevent='selectDaypart(daypart)', :class="(daypart.id == selectedDaypart.id) ? 'vui-button--brand' : 'vui-button--neutral'", style='white-space: nowrap', :disabled='disabled')
      | {{daypart.name}}
</template>

<script>
  // https://github.com/vasanthk/js-bits/blob/master/js/array-filter-map-reduce.js
  import Icon from './Icon.vue'

  export default {
    components: { Icon },

    props: ['disabled'],

    data () {
      return {
        selectedDaypart: {
          id: 1,
          name: 'Early Morning',
          startTime: '04:30 am'
        },
        'dayparts': [
          {
            id: 1,
            name: 'Early Morning',
            startTime: '04:30 am'
          },
          {
            id: 2,
            name: 'Daytime',
            startTime: '09:00 am'
          },
          {
            id: 3,
            name: 'Early Fringe',
            startTime: '03:00 pm'
          },
          {
            id: 4,
            name: 'Early News',
            startTime: '5:00 pm'
          },
          {
            id: 5,
            name: 'Prime Access',
            startTime: '07:00 pm'
          },
          {
            id: 6,
            name: 'Prime/Specials',
            startTime: '08:00 pm'
          },
          {
            id: 7,
            name: 'Sports',
            startTime: null
          },
          {
            id: 8,
            name: 'Late News',
            startTime: '10:00 pm'
          },
          {
            id: 9,
            name: 'Late Fringe',
            startTime: '11:00 pm'
          },
          {
            id: 10,
            name: 'Weekend',
            startTime: '11:00 pm'
          },
          {
            id: 11,
            name: 'Overnight',
            startTime: '01:00 am'
          }
        ]
      }
    },

    methods: {
      selectDaypart (daypart) {
        this.$dispatch('selected-daypart', daypart)
        this.selectedDaypart = daypart
      }
    }
  }
</script>
