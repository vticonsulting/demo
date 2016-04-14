<template lang="jade">
  img(:src='/absolute/path/{{image_src}}')
  //- This doesn't work though. Can someone help me out?

  //- its because when you use v-bind:prop or :prop then value is treated as js expression
  //- try
  img(:src=' "/absolute/path/"" + image_src ')
</template>

<script>
  export default {
    data () {
      return {
        image_src: 'image.gif'
      }
    }
  }
</script>
