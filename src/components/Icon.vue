<template lang="pug">
  svg.vui-icon.vui-icon--x-small.vui-align-middle(:class='')
    use(v-bind:xlink:href='"/Content/assets/icons.svg#icon-" + name')
</template>

<script>
  export default {
    props: ['name', 'size', 'color']
  }
</script>
