<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
// import {ref} from '@vue/composition-api'
import {ref, watchEffect} from '@vue/composition-api'
import eventApi from '@/api/event.js'

export default {
  setup() {
    const searchInput = ref('')
    const results = ref(0)

    // results.value = eventApi.getEventCount(searchInput.value)
    watchEffect(() => {
      results.value = eventApi.getEventCount(searchInput.value)
    })

    // watch(searchInput, (newVal, oldVal) => {})
    // watch([firstName, lastName], () => {})
    // watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {})

    return {searchInput, results}
  },
}
</script>
