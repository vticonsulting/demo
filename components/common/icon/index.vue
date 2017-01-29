<template lang="pug">
  svg.vui-icon.vui-align-middle(:class='classes')
    use(v-bind:xlink:href='"icons.svg#icon-" + name')
</template>

<script>
  export default {
    props: ['name', 'size', 'color'],
    computed: {
      classes () {
        return [
          'vui-icon--x-small'
        ]
      }
    }
  }
</script>
