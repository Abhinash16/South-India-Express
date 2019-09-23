<template>
<div class="managetrain">
<div class="mbr-section form4 cid-qv5Aq4h3k3" id="form4-2y" data-rv-view="5142"> 
    <div class="container">
        <div class="row">
            <div class="col-md-6">
  
                <form class="form-contact" >
                <h1 class="h3 mb-3 font-weight-normal">Let us hear from you.</h1>
                <div class="error" v-if="error">
                    <p>{{result.msg}}</p>
                </div>
                <label for="inputEmail"  class="sr-only" >Train Number</label>
                <input class="form-control" placeholder="Your Name" autofocus v-model="name" >
                <label for="inputphone" class="sr-only">Phone</label>
                <input class="form-control" placeholder="Phone" v-model="phone">
                  <label for="inputemail" class="sr-only">Email</label>
                <input class="form-control" placeholder="Email" v-model="email">
                  <label for="inputmessage" class="sr-only">Message</label>
                <textarea class="form-control" placeholder="Message" v-model="message"></textarea>
                <button class="btn btn-lg btn-primary btn-block mt-2" type="submit" v-on:click="contact">Send Message</button>
            </form>
            </div>
        </div>
        </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'managetrain',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
