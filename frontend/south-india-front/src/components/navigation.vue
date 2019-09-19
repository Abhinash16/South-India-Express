<template>
<nav class="navbar navbar-expand-md navbar-dark fixed-top m-0 p-0">
    <a class="navbar-brand"><router-link to="/">South India Heritage Express</router-link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
         <a><router-link to="/">Home</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="packages">Packages</router-link></a> 
        </li>
        <li class="nav-item">
         <a><router-link to="/contact">Contact Us</router-link></a> 
        </li>
        <li class="nav-item" v-if="!login">
         <a><router-link to="/login">Login</router-link></a> 
        </li>
         <li class="nav-item dropdown" v-if="login">
            <a class="nav-item dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">My Account</a>
              <a class="dropdown-item" href="#">My Bookings</a>
               <a class="dropdown-item" v-on:click="logout">Logout</a> 
            </div>
          </li>
      </ul>
    </div>
  </nav>
   
</template>
<script src="https://unpkg.com/vue-slider"></script>

<script>
export default {
  name: 'navigation',
  data(){
    return{
      login:false
    }
  },
  created(){
      var y = localStorage.getItem('username')
      if(y != null){
        this.login = true
      }else{
        this.login= false
      }
  },
  methods:{
    logout: function(){
      localStorage.removeItem('username')
      this.login= false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
li.nav-item {
    padding-left: 8px;
    margin: 4px;
    text-decoration: none;
}
.navbar-toggler{
  color: black;
  background-color:black
}
.navbar-collapse ul li a{
  color: black;
    text-decoration: none;
    background-color: transparent;
}
.navbar-brand a {
    color: black;
    text-decoration: none;
    background-color: transparent;
    padding-left: 5px;
}
.navbar{
  background-color: #fff;
    -webkit-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    -moz-box-shadow: 0 2px 5px rgba(0,0,0,.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.1);
    font-family: 'Ubuntu', sans-serif;
    padding: 10px 5px 10px 5px !important;}

.navbar-collapse ul li a:hover{
  color: green
}

</style>
