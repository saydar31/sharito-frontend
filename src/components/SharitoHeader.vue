<template>
  <header>
    <!-- Header Top Start -->
    <div class="header-top">
      <div class="container">
        <div class="row">
          <!-- Header Top left Start -->
          <div class="col-lg-4 col-md-12 d-center">
            <div class="header-top-left">
              <img src="../img/icon/call.png" alt="">Call Us : +8 800 555 35 35
            </div>
          </div>
          <!-- Header Top left End -->
          <!-- Search Box Start -->
          <!--  TODO ПОИСК -->
          <div class="col-lg-4 col-md-6 ml-auto mr-auto">
            <div class="search-box-view">
              <form action="#">
                <input type="text" class="email" placeholder="Search Your Product" name="product">
                <button type="submit" class="submit"></button>
              </form>
            </div>
          </div>
          <!-- Search Box End -->
          <!-- Header Top Right Start -->
          <div class="col-lg-4 col-md-12">

          </div>
          <!-- Header Top Right End -->
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Header Top End -->
    <!-- Header Bottom Start -->
    <div class="header-bottom header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-2 col-sm-5 col-5">
            <div class="logo">
              <a href="index-2.html"><img src="../img/logo/logo.png" alt="logo-image"></a>
            </div>
          </div>
          <!-- Primary Vertical-Menu End -->
          <!-- Search Box Start -->
          <div class="col-xl-6 col-lg-7 d-none d-lg-block">
            <div class="middle-menu pull-right">
              <nav>
                <ul class="middle-menu-list">
                  <li><a></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- Search Box End -->
          <!-- Cartt Box Start -->
          <!--  TODO ЧЕКАТЬ СОСТОЯНИЕ АККАУНТА И ВЫВОДИТЬ ТОЛЬКО НУЖНО (ИЛИ ВОВСЕ УДАЛИТЬ) -->
          <div class="col-lg-3 col-sm-7 col-7">
            <div class="cart-box text-right">
              <ul>
                <li>
                  <h3>
                    <a><i class="fa fa-cog"></i></a>
                    <ul class="ht-dropdown">
                      <h5>
                        <li v-if="showLogin"><router-link :to="{path: '/login'}">Login</router-link></li>
                        <li v-show="showLogin"><router-link :to="{name: 'SignUp'}">Register</router-link></li>
                        <li v-if="showProfile"><router-link :to="{path: '/profile'}">Account</router-link></li>
                      </h5>
                    </ul>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Header Bottom End -->
  </header>
</template>

<script>
export default {
  name: "SharitoHeader",
  mounted() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 150) {
        $('.header-sticky').addClass("sticky");
      } else {
        $('.header-sticky').removeClass("sticky");
      }
    });

  },
  computed:{
    showLogin(){
      return !this.$store.getters.isAuthenticated;
    },
    showProfile(){
      return !!this.$store.getters.isAuthenticated;
    }
  }
}
</script>

<style scoped>

</style>