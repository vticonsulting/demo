<template lang="pug">
  a.vui-grid.vui-grid--align-spread(href='', @click.prevent='changeSorting', v-if='sortable !== false')
    span.vui-align-middle {{ columnName }}
    span
    span.vui-align-middle
      icon(:name='"sort" || sortedDirection', style='margin-left: -1rem')
</template>

<script>
  export default {
    props: [
      'columnName'
    ],
    data () {
      return {
        sortable: true,
        currentSorting: {
          columnName: ''
        }
      }
    },
    computed: {
      sortedDirection () {
        return 'sort-desc' || 'sort-asc'
      }
    },
    methods: {
      changeSorting () {

      }
    }
  }
</script>
