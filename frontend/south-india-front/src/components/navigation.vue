<template>
  <div class="navigation">
        <a><router-link to="/">Home</router-link></a> |
        <a><router-link to="packages">Packages</router-link></a> |
        <a><router-link to="login">Login</router-link></a> 


  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
