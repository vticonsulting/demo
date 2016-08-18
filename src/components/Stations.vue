<template>
  <div>
    <div class="vui-form-element">
      <div class="vui-form-element__control">
        <label class="vui-checkbox">
          <input type="checkbox" v-model="selectAll">
          <span class="vui-checkbox--faux"></span>
          <span class="vui-form-element__label">Check/Uncheck All</span>
        </label>
      </div>
    </div>
    <div class="vui-form-element" v-for="station in stations">
      <div class="vui-form-element__control">
        <label class="vui-checkbox">
          <input type="checkbox" v-model="selected" name="stations" :value="station.id" number>
          <span class="vui-checkbox--faux"></span>
          <span class="vui-form-element__label">{{ station.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stations'],

    data () {
      return {
        selected: []
      }
    },

    computed: {
      selectAll: {
        get () {
          return this.stations
            ? this.selected.length === this.stations.length
            : false
        },
        set (value) {
          var selected = []

          if (value) {
            this.stations.forEach((station) => {
              selected.push(station.id)
            })
          }

          this.selected = selected
        }
      }
    },

    methods: {
      toggleSelect () {
        var select = this.selectAll
        this.stations.forEach((station) => {
          station.checked = !select
        })
        this.selectAll = !select
      }
    }
  }
</script>
