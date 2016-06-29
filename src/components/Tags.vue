<template>
  <div>
    <ul class="tag-list">
      <li v-for="tag in tags" track-by="$index">
        <span class="delete-tag" @click="removeTag(tag)">x</span>
        <a href="#" class="tag-list-item" v-text="tag"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      removeTag (tag) {
        this.tags.$remove(tag)
      }
    }
  }
</script>
