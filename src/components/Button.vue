<template lang="jade">
  button.vui-button(class='vui-button--{{type}}')
    slot
</template>

<script>
  export default {
    props: ['buttonText', 'type']
  }
</script>
