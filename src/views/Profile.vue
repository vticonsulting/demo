<template>
  <div>
    <p>Hi, my name is {{ user }}</p>

    <label for="username">Username:</label>
    <input v-model="user" id="username" name="username" />
    <Capacity />
  </div>
</template>

<script>
import Capacity from '@/components/Capacity'
export default {
  components: {Capacity},
  data: () => ({
    user: 'Victor',
  }),
}
</script>
