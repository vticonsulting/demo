<template lang="jade">
  .messages
    message(v-for="message in messages", :message.once="message")
</template>

<script>
  import Message from './Message.vue'

  export default {
    components: { Message },

    data () {
      return {
        messages: [
          {name: 'test'},
          {name: 'bob'}
        ]
      }
    }
  }
</script>
