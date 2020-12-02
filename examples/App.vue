<template>
  <div id="app">
    <jk-button>12</jk-button>
    <div class="test">123</div>
  </div>
</template>
<script>

// import JkButton from '../lib/button'
import JkButton from '@packages/button/index'

export default {
  name: 'App',
  components: {
    JkButton
  }
}
</script>

<style lang="scss">
  html,body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
