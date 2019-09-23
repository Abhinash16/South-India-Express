<template>
  <div class="managetrain col-md-12">
    <hr>
    <div class="view">
        <table class="table">

            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Train No</th>
                    <th scope="col">Train Name</th>
                    <th scope="col">Package Id</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button>Delete</button></td>
                </tr>
            </tbody>
        </table> 
    <div class="option">
        <button v-on:click="addtrain=!addtrain">Add Trains</button>
    </div>        
    </div>

    <div class="add col-md-12" v-if="addtrain">
        
            <label for="tno">Train No : </label>
            <input type="text" placeholder="Train Number" >
            <br>
            <label for="tname">Train Name : </label>
            <input type="text" placeholder="Train Name" >
            <br>
            <label for="pid">Package Id : </label>
            <select>
                <option>001</option>
            </select>
            <br>
            <label for="tid">Train Id : </label>
            <select>
                <option>001</option>
            </select>
            <br>  
            <button>Add Train</button>
    </div>    

  </div>
</template>

<script>
export default {
  name: 'managetrain',
  props: {
  },
  data(){
    return {
          viewtrain:true,
      addtrain:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
