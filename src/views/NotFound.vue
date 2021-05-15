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
            <li class="active"><a href="#">404 Page</a></li>
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

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";
export default {
  name: "NotFound",
  components: {SharitoFooter, SharitoHeader}
}
</script>

<style scoped>

</style>