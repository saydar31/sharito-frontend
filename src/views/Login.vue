<template>
  <div class="wrapper">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Header Area End -->
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area ptb-60 ptb-sm-30">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li><router-link :to="{name: 'Index'}">Home</router-link></li>
            <li class="active"><router-link :to="{name: 'Index'}">Login</router-link></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- LogIn Page Start -->
    <div class="log-in pb-60">
      <div class="container">
        <div class="row">
          <!-- New Customer Start -->
          <div class="col-sm-6">
            <div class="well">
              <div class="new-customer">
                <h3>NEW CUSTOMER</h3>
                <p class="mtb-10"><strong>Register</strong></p>
                <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep
                  track of the orders you have previously made</p>
                <router-link class="customer-btn" :to="{name: 'SignUp'}">continue</router-link>
              </div>
            </div>
          </div>
          <!-- New Customer End -->
          <!-- Returning Customer Start -->
          <div class="col-sm-6">
            <div class="well">
              <div class="return-customer">
                <h3 class="mb-10">RETURNING CUSTOMER</h3>
                <p class="mb-10"><strong>I am a returning customer</strong></p>
                <form action="#">
                  <div class="form-group">
                    <label class="control-label">Enter your email address here...</label>
                    <input v-model.trim="email" type="text" name="email" placeholder="Enter your email address here..." id="input-email"
                           class="form-control">
                  </div>
                  <div class="form-group">
                    <label class="control-label">Password</label>
                    <input v-model="password" type="password" name="pass" placeholder="Password" id="input-password" class="form-control">
                  </div>
                  <p class="lost-password"><a href="#">Forgot password?</a></p>
                  <button @click.prevent="signIn" :disabled="email.length === 0 || password.length === 0" class="return-customer-btn">Login</button>
                </form>
              </div>
            </div>
          </div>
          <!-- Returning Customer End -->
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- LogIn Page End -->

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";

export default {
  name: "Login",
  components: {SharitoFooter, SharitoHeader},
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    async signIn(){
      await this.$store.dispatch('login', this.$data)
    }
  }
}
</script>

<style scoped>

</style>