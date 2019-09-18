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
        <h3>“The gladdest moment in human life is a departure into unknown lands.”</h3>
        <p>Plan your holiday now!</p>
        <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train22.jpg" alt="banner2" width="100%" >
      <div class="carousel-caption">
        <h3>“Better to see something once than hear about it a thousand times”</h3>
        <p>Thank you, Mumbai!</p>
                <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
      </div>   
    </div>
    <div class="carousel-item">
      <img src="../assets/train33.jpg" alt="banner3" width="100%" >
      <div class="carousel-caption">
        <h3>“Travel and change of place impart new vigor to the mind.”</h3>
        <p>Thank you, Hyderabad!</p>
                <button class="btn btn-primary"><router-link to="/packages">Book Now</router-link></button>
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
<div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Hello, Pops</h1>
      <p>Maple Hotels and Indian Railways have planned to introduce a new special luxury cum passenger
train to promote tourism. This train covers the states of Kerala, Tamil Nadu, Andhra Pradesh,
Telangana, Karnataka and Maharashtra witnessing the grandeur of the erstwhile kingdoms and
providing a wholesome experience of historical, spiritual, wildlife and cultural richness.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
  </div>

  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4">
        <h2>Why us?</h2>
        <p>State-of-the-art amenities enhance the luxury level of the South India Heritage Express. The
luxuriously appointed cabins recall the elegance of yesteryear&#39;s travelling experience. This Indian
Luxury Train also showcases the perfect mix of quaint décor together with heritage and culture of
the Deccan and Southern dynasties. The traditional Indian hospitality is also offered to the guests
onboard to ensure a princely experience. Therefore, the guests onboard are sure to rediscover the
forgotten era of royal traveling.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4">
        <h2>Coverage?</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div class="col-md-4">
        <h2>Want a free tour?</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>

    <hr>

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
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
.carousel-caption{
  font-family: 'Josefin Sans', sans-serif;
  
}
.carousel-caption a{
  color: whitesmoke;
    text-decoration: none;
}
.container{
  font-family: 'Josefin Sans', sans-serif;

}
.jumbotron{
  margin-top: 20px;
  background-color: beige
}
</style>
