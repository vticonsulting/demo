<script>
  export default {
    methods: {
      savePost () {
        this.$http.post('/posts', this.post)
          .success((post) => {
            this.$route.router.go('/')
          })
      }
    }
  }
</script>
