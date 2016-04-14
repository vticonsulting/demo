<!-- https://gist.github.com/yang-wei/30639fea44956a6467da -->
<template lang="jade">
  input(type='text', v-model="value")
</template>

<script>
  import Pikaday from 'pikaday'
  // import moment from 'moment'

  export default {
    props: ['value'],

    ready () {
      let picker = new Pikaday({
        field: this.$el,
        onSelect: function () {
          this.value = picker.toString()
        }.bind(this)
      })
    }
  }
</script>
