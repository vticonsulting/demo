<template lang="jade">
  svg.vui-icon.vui-align-middle(:class='', style='color: hsla(214, 66%, 34%, 1)')
    use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='#icon-{{ name }}')
</template>

<script lang="babel">
  export default {
    props: ['name', 'size', 'style']
  }
</script>
