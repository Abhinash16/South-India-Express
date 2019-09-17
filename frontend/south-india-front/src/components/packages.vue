<template>

  <div class="packages-container">
    <div class="container">
      <div class="row">
            <div class="col-md-4" v-for="pack in packages">
              <div class="card mb-4 shadow-sm">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div class="card-body">
                <p class="card-text">
                  {{pack.package_name}}
                </p>
                  <p class="card-text">
                  From: {{pack.source}}
                </p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>  
    <div class="container" v-if="packages.length == 0">
    <div class="carousel">
      <h1>:(</h1>
      <p> Please connect the Backend Server</p>
    </div>
    </div>  
  </div>
</template>


<script>
export default {
  name: 'packages',
  components:{
  },
  data(){
      return{
          toggler:false,
          packages:[],
      }
  },
  beforeMount() {
    this.$http.get('http://localhost:8081/api/packages')
      .then(response=>{
        this.packages= response.body;
      })
  },
  props: {
              specific:[]
  },
  methods:{
    viewmore: function(id){
        this.$http.get('http://localhost:8080/api/packages/'+id)
        .then(response=>{
        this.specific= response.body
      })
    }
  }
}
</script>


<style scoped>

</style>













 
