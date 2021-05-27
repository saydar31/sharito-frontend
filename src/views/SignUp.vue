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
            <li><a href="index-2.html">Home</a></li>
            <li class="active"><a href="register.html">Register</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- Register Account Start -->
    <div class="register-account pb-60">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="register-title">
              <h3 class="mb-10">REGISTER ACCOUNT</h3>
              <p class="mb-10">If you already have an account with us, please login at the login page.</p>
            </div>
          </div>
        </div>
        <!-- Row End -->
        <div class="row">
          <div class="col-sm-12">
            <form @submit.prevent="" class="form-horizontal" action="#">
              <fieldset>
                <legend>Your Personal Details</legend>
                <div class="form-group">
                  <label class="control-label" for="f-name"><span class="require">*</span>First Name</label>
                  <div class="col-sm-10">
                    <input v-model="firstName" type="text" class="form-control" id="f-name" placeholder="First Name">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="l-name"><span class="require">*</span>Last Name</label>
                  <div class="col-sm-10">
                    <input v-model="lastName" type="text" class="form-control" id="l-name" placeholder="Last Name">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="email"><span class="require">*</span>Enter your email address
                    here...</label>
                  <div class="col-sm-10">
                    <input v-model="email" type="email" class="form-control" id="email"
                           placeholder="Enter your email address here...">
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Your Password</legend>
                <div class="form-group">
                  <label class="control-label" for="pwd"><span class="require">*</span>Password:</label>
                  <div class="col-sm-10">
                    <input @blur="checkPasswords" v-model="password" type="password" class="form-control" id="pwd"
                           placeholder="Password">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="pwd-confirm"><span class="require">*</span>Confirm Password</label>
                  <div class="col-sm-10">
                    <input @blur="checkPasswords" v-model="passwordRepeat" type="password" class="form-control"
                           id="pwd-confirm" placeholder="Confirm password">
                  </div>
                </div>
              </fieldset>

              <div class="buttons newsletter-input">
                <div class="pull-right">I have read and agree to the <a href="#" class="agree"><b>Privacy Policy</b></a>
                  <input type="checkbox" name="agree" value="1"> &nbsp;
                  <button @click="signUp" class="newsletter-btn">Continue</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Register Account End -->

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";

export default {
  name: "SignUp",
  components: {SharitoFooter, SharitoHeader},
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  },
  methods: {
    checkPasswords() {
      if (this.password.length > 0 && this.passwordRepeat.length > 0 && this.password !== this.passwordRepeat) {
        alert('ты это пароль проверь, а то не совпадают');
      }
    },
    async signUp() {
      let body = {
        "login": this.email,
        "first_name": this.firstName,
        "last_name": this.lastName,
        "email": this.email,
        "password": this.password
      };
      let response = await this.$store.dispatch('signUp',body);
      if (response.success){
        this.$router.push({name:'Login'});
      } else {
        alert('пользователь с такой почтой уже существует в системе')
      }
    }
  }
}
</script>

<style scoped>

</style>