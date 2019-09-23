<template>
<div class="container">
	<div class="row ">
        <div class="control-group col-md-12" id="fields">
            <label class="control-label" for="field1">Add Passenger Details</label>
            <div class="controls "> 
                <form role="form" autocomplete="off">
                    <div class="entry input-group col-xs-3">
                        <input class="form-control" name="name" type="text" placeholder="Name" />
                        <input class="form-control " name="age" type="text" placeholder="Age" />
                        <input class="form-control" name="pnumber" type="text" placeholder="Phone Number" />
                    	<span class="input-group-btn">
                            <button class="btn btn-success btn-add" type="button">
                                <span class="glyphicon glyphicon-plus">+</span>
                            </button>

                        </span>
                    </div>
                </form>
            <br>
           
            </div>
        </div>
	</div>
    <hr>
    <div class="coaches" >
      <label for="e">Executive Coach</label>
      <input type="radio" v-model="response" name="options" :value="executive" id="e" >|
      <label for="p">Premiere Coach</label>
      <input type="radio" v-model="response" name="options" :value="premium" id="p">|
      <label for="c">Club Coach</label>
      <input type="radio" v-model="response" name="options" :value="club" id="c">

    </div>
    
    <div class="seats" v-if="response == executive">
        <label>select seat:</label>
        <select for="seatexecutive" v-for="pack in packages">
            <option>yeah</option>
        </select>
        <p>All the add ons are includede in this package.</p>
    </div>

    <div class="seats" v-if="response == premium">
        <label>select seat:</label>
        <select for="seatpremier">
            <option>p1</option>
            <option>p2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <p>Wifi is included but not spa, select if you want.</p>
    </div>

    <div class="seats" v-if="response == club">
        <label>select seat:</label>
        <select for="seatclub"> 
            <option>c1</option>
            <option>c2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <p>No add ons available, you can select if you want.</p>
    </div>

    <div class="addon" v-if="response == premium"  v-for="pack in packages">
        spa: <input type="checkbox" v-model="addons" :value="pack.wifi">
    </div>
    <div class="addon" v-if=" response == club" v-for="pack in packages">
     wifi: <input type="checkbox" v-model="addons" :value="pack.wifi">
    spa: <input type="checkbox" v-model="addons" :value="pack.spa">
    </div>

    <div class="price" v-for="pack in packages" v-if="response == executive">
        <p>Rs. {{pack.price_exeutive}}</p>
    </div>
      <div class="price" v-for="pack in packages" v-if="response == premium">
        <p>Rs. {{pack.price_premier + 500}}</p>
    </div>
    {{addons + 2000}}
      <div class="price" v-for="pack in packages" v-if="response == club">
        <p>Rs. {{pack.price_club + addons }}</p>
    </div>
    <hr>
    <div>
        <button>Submit</button>
    </div>
</div>


</template>

<script>
export default {
    data(){
        return{
            response:[],
            executive:'executive',
            premium:'premium',
            club:'club',
            packages:[],
            addons:0
        }
    },
    beforeMount() {
     var id = this.$route.params.id
     console.log(id)
    this.$http.get('http://localhost:8080/api/display/'+ id)
      .then(response=>{
        this.packages= response.body;
        console.log(this.packages)
      })
  },

} 

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus">-</span>');
    }).on('click', '.btn-remove', function(e)
    {
		$(this).parents('.entry:first').remove();

		e.preventDefault();
		return false;
	});
});


</script>


<style scoped>
.container{

    margin: 0px auto;
}
.entry:not(:first-of-type)
{
    margin-top: 10px;
}

.glyphicon
{
    font-size: 12px;
}

.entry button{
    margin-left: 5px;
}
.coaches input{
    margin: 0px 15px 0px 15px;
}
.addon{
margin: 10px 0px 10px 0px;
}
</style>
