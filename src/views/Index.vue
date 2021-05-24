<template>
  <div class="wrapper homepage">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Header Area End -->
    <!-- Slider Area Start -->
    <div class="slider-area pb-60">
      <div class="slider-wrapper theme-default  nivo2">
        <!-- Slider Background  Image Start-->
        <div id="slider" class="nivoSlider">
          <img src="../img/slider/3.jpg" data-thumb="../img/slider/3.jpg" alt=""/>
          <img src="../img/slider/3.jpg" data-thumb="../img/slider/3.jpg" alt=""/>
        </div>
      </div>
    </div>
    <!-- Slider Area End -->
    <!-- Best Products Start -->
    <div class="best-seller-product pb-30">
      <div class="container">
        <div class="row">
          <div class="group-title w-100 p-3">
            <h2>Recommendations</h2>
          </div>
        </div>
        <!-- Best Product Activation Start -->
        <div class="row">
          <!-- Single Product Start -->
          <!-- TODO ДАННЫЕ ТОВАРА -->
          <div v-for="product in products" class="single-product">
            <!-- Product Image Start -->
            <div class="pro-img">
              <a href="product.html">
                <img class="primary-img" :src="product.imageUrl" alt="single-product">
                <img class="secondary-img" :src="product.imageUrl" alt="single-product">
              </a>
            </div>
            <!-- Product Image End -->
            <!-- Product Content Start -->
            <div class="pro-content">
              <h4><a href="product.html">{{ product.name }}</a></h4>
              <p>
                <span class="price">${{ product.price }}.00</span>
              </p>
            </div>
            <!-- Product Content End -->
          </div>
          <!-- Single Product End -->

        </div>
        <!-- Best Product Activation End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Best Product End -->


    <!-- Company Policy Start -->
    <div class="company-policy pb-60 pb-sm-25">
      <div class="container">
        <div class="row">
          <!-- Single Policy Start -->
          <div class="col-lg-3 col-sm-6">
            <div class="single-policy">
              <div class="icone-img">
                <img src="../img/icon/1.png" alt="">
              </div>
              <div class="policy-desc">
                <h3>Free Delivery</h3>
                <p>Free shipping on all order</p>
              </div>
            </div>
          </div>
          <!-- Single Policy End -->
          <!-- Single Policy Start -->
          <div class="col-lg-3 col-sm-6">
            <div class="single-policy">
              <div class="icone-img">
                <img src="../img/icon/2.png" alt="">
              </div>
              <div class="policy-desc">
                <h3>Online Support 24/7</h3>
                <p>Support online 24 hours</p>
              </div>
            </div>
          </div>
          <!-- Single Policy End -->
          <!-- Single Policy Start -->
          <div class="col-lg-3 col-sm-6">
            <div class="single-policy">
              <div class="icone-img">
                <img src="../img/icon/3.png" alt="">
              </div>
              <div class="policy-desc">
                <h3>Money Return</h3>
                <p>Back guarantee under 7 days</p>
              </div>
            </div>
          </div>
          <!-- Single Policy End -->
          <!-- Single Policy Start -->
          <div class="col-lg-3 col-sm-6">
            <div class="single-policy">
              <div class="icone-img">
                <img src="../img/icon/4.png" alt="">
              </div>
              <div class="policy-desc">
                <h3>Member Discount</h3>
                <p>Onevery order over $30.00</p>
              </div>
            </div>
          </div>
          <!-- Single Policy End -->
        </div>
      </div>
    </div>
    <!-- Company Policy End -->
    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";
export default {
  name: "Index",
  components: {SharitoFooter, SharitoHeader},
  data(){
    return {
      products: []
    }
  },
  async created() {

  }
}
</script>

<style scoped>

</style>