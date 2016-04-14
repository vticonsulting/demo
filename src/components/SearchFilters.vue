<template lang="jade">
  select(v-model='tag')
    option(value='') Choose...
    option(v-for='tag in tags' v-bind:value='tag.id') {{ tag.name }}
</template>

<script>
  export default {
    props: {
      tags: Array,
      tag: {
        type: String,
        default: () => {
          return ''
        }
      }
    }
  }
</script>
