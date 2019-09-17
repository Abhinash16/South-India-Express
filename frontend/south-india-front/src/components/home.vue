<template>
  <div class="home">
   <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/train11.jpg" alt="banner1" width="100%" >
      <div class="carousel-caption">
        <h3>Bengaluru</h3>
        <p>Thank you Bengaluru!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train22.jpg" alt="banner2" width="100%" >
      <div class="carousel-caption">
        <h3>Mumbai</h3>
        <p>Thank you, Mumbai!</p>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train33.jpg" alt="banner3" width="100%" >
      <div class="carousel-caption">
        <h3>Hyderabad</h3>
        <p>Thank you, Hyderabad!</p>
      </div>   
    </div>
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
  }
}
</script>

<style scoped>

</style>
