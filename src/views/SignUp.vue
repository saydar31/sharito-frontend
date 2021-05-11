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
                  <input type="submit" value="Continue" class="newsletter-btn">
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

    <footer class="off-white-bg">
      <!-- Footer Top Start -->
      <!-- Footer Bottom Start -->
      <div class="footer-bottom off-white-bg2">
        <div class="container">
          <div class="footer-bottom-content">
            <p class="copy-right-text">Copyright © <a href="#">Sharito</a> All Rights Reserved.</p>
            <div class="footer-social-content">
              <ul class="social-content-list">
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-wifi"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Container End -->
      </div>
      <!-- Footer Bottom End -->
    </footer>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";

export default {
  name: "SignUp",
  components: {SharitoHeader},
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
    }
  }
}
</script>

<style scoped>

</style>