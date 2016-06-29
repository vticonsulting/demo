<template lang="jade">
  .message {{ message.name }}
</template>

<script>
  export default {
    props: ['message']
  }
</script>
