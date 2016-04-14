<template lang="jade">
  ul
    li(v-for='event in events')
      h2 {{ event.title }}
      p {{ event.body }}
</template>

<script>
  export default {
    props: {
      events: Array
    },

    methods: {
      // delete event from array  events
      delete (event) {
        if (confirm('Delete?')) {
          // $remove is a Vue convenience method similar to splice
          this.events.$remove(event)
        }
      }
    }
  }
</script>
