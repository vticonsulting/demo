<template>
  <router-link
    class="message-link"
    :to="{name: 'message', params: {id: message.id}}"
  >
    <div class="message-card">
      <span class="eyebrow">@{{ message.sender }} on {{ message.date }}</span>
      <h4 class="title">{{ message.subject }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    message: Object,
  },
}
</script>
