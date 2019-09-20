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
      <input type="radio" v-model="response" name="options" :value="premiere" id="p">|
      <label for="c">Club Coach</label>
      <input type="radio" v-model="response" name="options" :value="club" id="c">

    </div>
    
    <div class="seats" v-if="response == executive">
        <lable>select seat:</lable>
        <select for="seatexecutive">
            <option>e1</option>
            <option>e2</option>
            <option>e3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <p>All the add ons are includede in this package.</p>
    </div>

    <div class="seats" v-if="response == premiere">
        <lable>select seat:</lable>
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
        <lable>select seat:</lable>
        <select for="seatclub"> 
            <option>c1</option>
            <option>c2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <p>No add ons available, you can select if you want.</p>
    </div>

    <div class="addon" v-if="response == premier">
        spa: <input type="checkbox">
    </div>
    <div class="addon" v-if=" response == club">
     wifi: <input type="checkbox">
    spa: <input type="checkbox">
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
            premium:'premiere',
            club:'club'
           
        }
    }

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
