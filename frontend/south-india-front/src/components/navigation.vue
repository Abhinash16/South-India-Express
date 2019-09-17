<template>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand"><router-link to="/">South India Heritage</router-link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
         <a><router-link to="/">Home</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="/packages">Packages</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="/login">Login</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="/contact">Contact Us</router-link></a> 
        </li>
      </ul>
    </div>
  </nav>
   
</template>
<script src="https://unpkg.com/vue-slider"></script>
<script>
export default {
  name: 'navigation',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

li.nav-item {
    padding-left: 8px;
    margin: 4px;
    text-decoration: none;
}

.navbar-collapse ul li a{
  color: white;
    text-decoration: none;
    background-color: transparent;
}
.navbar-brand a {
    color: #FF993F;
    text-decoration: none;
    background-color: transparent;
}
</style>
