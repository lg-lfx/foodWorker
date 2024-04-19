<template>
  <div id="app">
    <TextName></TextName>
  </div>
</template>

<script>
import TextName from './components'

export default {
  name: 'App',
  components: {
    TextName
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
