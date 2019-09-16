<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';
import footers from './components/footer'

export default {
  name: 'app',
  components: {
    navigation,
    footers
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
