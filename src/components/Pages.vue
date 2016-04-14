<template lang="jade">
  .pages
    .vui-scrollable--x
      table.vui-table.vui-no-row-hover.vui-table--custom-1
        thead
          tr
            th(colspan='2' rowspan='2') Page Name
            th(colspan='2') UX Design
            th(colspan='2') HTML
            th(colspan='2') Content/Mocked Data
            th(colspan='2') Review
            th(colspan='2') Documentation
            th(colspan='2') Retrofitting
          tr
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
            th Status
            th % Done
            //- th Blocked?
            //- th Waiting for
            //- th Owner
        tbody
          tr(v-for='(index, page) in pages', :class='(index % 2 === 0) ? "vui-highlight" : ""')
            td.vui-text-align--right {{index + 1}}.
            td
              a(:href='page.slug') {{page.name}}
            template(v-for='task in page.tasks')
              template(v-for='group in task.groups')
                group(:status='group.status', :percent-complete='group.percentComplete')
                //- td {{group.blocked}}
                //- td {{group.waitingFor}}
                //- td {{group.owner}}
</template>

<script>
  import store from '../store'
  import Group from '../components/Group.vue'

  export default {
    components: {Group},

    data () {
      return {
        pages: []
      }
    },

    created () {
      this.fetchPages()
    },

    methods: {
      fetchPages () {

        this.$http({url: store.apiHost + '/pages', method: 'GET'})
          .then(function (response) {
            this.pages = response.data
          }, function (response) {
            // error callback
          })

        // this.$http.get(store.apiHost + '/pages')
        //   .success((data, status, request) => {
        //     this.pages = data
        //   })
        //   .error((err) => console.log(err))
      }
    }
  }
</script>
