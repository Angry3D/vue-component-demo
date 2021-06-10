<template>
  <div id="app">
    <ComponentDemo></ComponentDemo>
  </div>
</template>

<script>
import ComponentDemo from '../src/components/index.vue'

export default {
  name: 'App',
  components: {
    ComponentDemo
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
