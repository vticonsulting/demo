<template lang="jade">
  svg.vui-icon.vui-icon--x-small.vui-align-middle(:class='')
    use(xlink:href='#icon-{{ name }}')
</template>

<script>
  export default {
    props: ['name', 'size', 'color']
  }
</script>
