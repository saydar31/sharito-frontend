<template>
  <div class="wrapper">
    <!-- Header Area Start -->
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
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="account.html">Account</a></li>
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
    <!-- Header Area End -->
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area ptb-60 ptb-sm-30">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li><a href="index-2.html">Home</a></li>
            <li class="active"><a href="404.html">404 Page</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- Error 404 Area Start -->
    <div class="error404-area pb-60 pt-20">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="error-wrapper text-center">
              <div class="error-text">
                <h1>404</h1>
                <h2>Opps! PAGE NOT BE FOUND</h2>
                <p>Sorry but the page you are looking for does not exist</p>
                <div class="error-button">
                  <a href="index.html">Back to home page</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Error 404 Area End -->

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
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>