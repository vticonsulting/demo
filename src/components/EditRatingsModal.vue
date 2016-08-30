<template lang="jade">
  modal(:show.sync='show', :on-close='close', size='large')

    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Edit Ratings

    .modal-body

      .vui-grid.vui-grid--align-spread.vui-p-around--small(style='background-color: white')

        .vui-media
          .vui-media__body
            p.vui-align-middle
              span.vui-m-right--xx-small Station Rate
              span.vui-text-heading--medium  ${{data.station.rate}}

      .vui-scrollable--x.vui-m-bottom--large(style='height: 20rem; overflow-y: scroll; overflow-x: hidden')

        table.vui-table.vui-no-row-hover
          thead
            tr
              th Demo
              th.u-width-medium Station Rating
              th.u-width-small
                | CPP
                sup 1
              th.u-width-small
                | Premium CPP
                sup 1
              th.u-width-medium Videa Rating
              th.u-width-small
                | CPP
                sup 1

          tbody
            tr(v-for='demo in data.station.demos', :class='($index % 2 === 0) ? "vui-highlight" : ""')
              td {{ demo.name }}
              td
                input.vui-input.vui-text-align--right(:value.sync='demo.rating | formatRating', v-model='demo.rating')
              td.vui-text-align--right
                cpp(:rate='data.station.rate', :rating='demo.rating')
              td.vui-text-align--right
                cpp(:rate='data.station.premium.rate', :rating='demo.rating')
              td.vui-text-align--right {{demo.rating | formatRating}}
              td.vui-text-align--right
                cpp(:rate='data.station.rate', :rating='demo.rating')

      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--neutral.vui-m-right--x-small(@click.prevent='close()') Cancel
        button.vui-button.vui-button--brand(@click.prevent='saveEditedRatings(data)') Save
</template>

<script>
  import store from '../store'
  import Modal from './Modal.vue'
  import Cpp from './Cpp.vue'

  export default {
    components: { Modal, Cpp },

    props: {
      show: Boolean,
      heading: String,
      data: Object
    },

    data () {
      return {
        sharedState: store.state,
        comment: '',
        reps: [
          {
            name: 'Adamy, John',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Admire, Tony',
            office: 'Austin, TX',
            checked: false
          },
          {
            name: 'Akens, Phil',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Aden, Michael',
            office: 'Chicago, IL',
            checked: false
          },
          {
            name: 'Adel, Joe',
            office: 'Atlanta, GA',
            checked: false
          }
        ]
        // demos: [
        //   {
        //     name: 'A25-54',
        //     rating: 2.1
        //   },
        //   {
        //     name: 'W25-54',
        //     rating: 1.7
        //   },
        //   {
        //     name: 'M25-54',
        //     rating: 1.6
        //   },
        //   {
        //     name: 'A18-49',
        //     rating: 1.6
        //   },
        //   {
        //     name: 'A18-34',
        //     rating: 1.0
        //   },
        //   {
        //     name: 'A25-49',
        //     rating: 1.6
        //   }
        // ]
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      },

      saveEditedRatings (context) {
        // context.station.rating =
        this.$dispatch('saved::edit-ratings')
        console.log(context.station.demos[0].rating)
        this.close()
      }
    }
  }
</script>
