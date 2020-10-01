<template>
  <div>
    <div class="message-header">
      <span class="eyebrow">
        @{{ message.sender }} on {{ message.date | date }}
      </span>

      <h1 class="title">{{ message.subject }}</h1>
    </div>

    {{ message.body }}

    <ul class="list-group">
      <li v-for="(tag, index) in message.tags" :key="index" class="list-item">
        <b>{{ tag }}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
}
</script>
