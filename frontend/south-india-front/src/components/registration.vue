<template>
  <div class="registration">
<div class="container col-md-8 pb-4">
  <div class="row">
    
    <div class="col-md-12 order-md-1">
      <h4 class="mb-3">Sign in Here!</h4>
      <form class="needs-validation" novalidate>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com">
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required>
          <div class="invalid-feedback">
            Please enter password.
          </div>
        </div>
        <div class="mb-3">
          <label for="password">Repeat Password</label>
          <input type="password" class="form-control" id="password"  required>
          <div class="invalid-feedback">
            Not a Match
          </div>
        </div>
        <button class="btn btn-primary btn-md" type="submit">Sign In</button>
      </form>
  </div>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'registration',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
