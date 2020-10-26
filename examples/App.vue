<template>
  <div id="app">
    <layout>
      <div slot="header">
        <div style="background: #f00;">123</div>
      </div>
      <div slot="content">
        <div style="background: #f0f;height: 1000px">456</div>
      </div>
      <div slot="footer"><h3>3</h3></div>
    </layout>
  </div>
</template>

<script>

import layout from '@packages/layout/index'

export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
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
