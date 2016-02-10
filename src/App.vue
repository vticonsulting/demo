<template>
  <div id="app">
    <img class="logo" src="./assets/svg/videa-logo.svg">
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    components: {
      Hello
    }
  }
  </script>

  <style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
