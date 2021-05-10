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
import SharitoHeader from "@/components/SharitoHeader";
export default {
  name: "NotFound",
  components: {SharitoHeader}
}
</script>

<style scoped>

</style>