<template>
    <div class="details">

        Full Name<input type="checkbox" placeholder="full name" > 

    </div>

</template>


<script>
export default {
    data(){
        return{
                packages:[]
        }
    },
    beforeMount() {
     var id = this.$route.params.id
     console.log(id)
        this.$http.get('http://localhost:8080/api/display/'+ id)
      .then(response=>{
        this.packages= response.body;
      })
  },
}
</script>