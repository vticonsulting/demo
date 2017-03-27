<template lang="pug">
  input(
    class='vue-scrubber'
    v-model='constrainedValue'
    v-on:mousedown='handleMouseDown'
    v-on:keypress='handleInput'
    v-on:keydown.up='handleKeyCodeUp'
    v-on:keydown.down='handleKeyCodeDown'
    v-on:change='handleChange'
  )
</template>

<script>
  // Scrubber component
  // Lets the user change an input field value by dragging the mouse left/right.
  // Manual text input is still possible.

  export default {
    data: () => ({
      isMouseDown: false,
      initialMouse: null,
      value: 0
    }),

    computed: {
      // returns the number of decimals based on the step value
      // e.g. '0.25' returns '2'
      decimals () {
        return this.steps.toString().substr((this.steps).toString().indexOf('.')).length - 1
      },

      // every time the value changes, we need to make sure it stays inside the min/max
      constrainedValue () {
        return this.constrain(this.value, this.min, this.max, this.decimals)
      }
    },

    // props that the scrubber can receive
    // value: initial value
    // min: minimum value
    // max: maximum value
    // steps: increments for each pixel the mouse is moved
    props: ['value', 'min', 'max', 'steps'],

    methods: {
      // constrains a number to not exceed the min/max
      // decimals: rounding precision
      constrain (value, min, max, decimals) {
        decimals = typeof decimals !== 'undefined' ? decimals : 0

        if (min != undefined && max != undefined) {
          return this.round(Math.min(Math.max(parseFloat(value), min), max), decimals)
        } else {
          return value
        }
      },

      // method to round a number to given decimals
      round (value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
      },
      handleInput (event) {
        // only allow numeric keys
        if (event.keyCode < 48 || event.keyCode > 57) {
          event.preventDefault()
        }
      },

      handleChange (event) {
        this.value = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value)
      },

      handleKeyCodeUp (event) {
        event.preventDefault();
          this.value += parseFloat(this.steps)
      },

      handleKeyCodeDown (event) {
        event.preventDefault();
          this.value -= parseFloat(this.steps)
      },

      // mouse handler
      handleMouseDown (event) {

        // enable scrubbing
        this.mouseDown = true

        // remember the initial mouse position when the scubbing started
        this.initialMouse = {
          x: event.clientX,
          y: event.clientY
        }

        // remember the initial value
        this.initialValue = this.value

        // register global event handlers because now we are not bound to the component anymore
        document.addEventListener('mousemove', this.handleMouseMove)

        // global mouse up listener
        document.addEventListener('mouseup', this.handleMouseUp)

      },
      handleMouseUp ($event) {

        // disable scrubbing
        this.mouseDown = false

        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)

      },

      // the actual translation of mouse movement to value change…
      handleMouseMove (event) {

        // scrub if the mouse is being pressed
        if (this.mouseDown) {
          var newValue = this.initialValue + ((event.clientX - this.initialMouse.x) * this.steps)

          // constrain the value to the min/max
          this.value = this.constrain(newValue, this.min, this.max, this.decimals)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .vue-scrubber
    font-size 15px
    padding 0.5em
    border 0
    cursor ew-resize
    background rgba(0, 0, 0, 0.08)
    color white
    -webkit-user-select none
    font-feature-settings "lnum" 1

  .vue-scrubber:hover,
  .vue-scrubber:focus
    outline 0
    box-shadow none

  /** Demo CSS */
  body
    font-family "Helvetica Neue", "Arial", sans-serif
    background #6247AA
    color #E2CFEA
    -webkit-font-smoothing antialiased
    padding 2rem
    max-width 800px
    margin 0 auto
  h1
    font-weight 100
    letter-spacing 2px
  h1 strong
    letter-spacing 0
  p
    line-height 1.4
    -webkit-font-smoothing antialiased
    opacity 0.8
    font-size 1rem
  .parameters
    margin-top 4rem
    background #6247AA
  label
    display block
    margin-bottom 2rem
  label span
    display inline-block
    width 100px
  code
    font-family "Monaco", monospaced
    font-size 15px
</style>
