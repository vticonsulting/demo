<template>
  <div>
    <MessageCard
      v-for="message in message.messages"
      :key="message.id"
      :message="message"
    />

    <template v-if="page != 1">
      <router-link
        :to="{name: 'messages-list', query: {page: page - 1}}"
        rel="prev"
      >
        Prev Page
      </router-link>
      <template v-if="hasNextPage"> | </template>
    </template>

    <router-link
      v-if="hasNextPage"
      :to="{name: 'messages-list', query: {page: page + 1}}"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import store from '@/store/store'
import MessageCard from '@/components/MessageCard.vue'

function getPageMessages(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('message/fetchMessages', {
      page: currentPage,
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    MessageCard,
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageMessages(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageMessages(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.message.messagesTotal > this.page * this.message.perPage
    },
    ...mapState(['message', 'user']),
  },
}
</script>
