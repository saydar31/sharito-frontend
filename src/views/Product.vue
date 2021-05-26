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
            <li>
              <router-link :to="{name:'Index'}">Home</router-link>
            </li>
            <li>
              <router-link :to="{name: 'ProductList'}">Shop</router-link>
            </li>
            <li class="active"><a href="#">Product</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- Product Thumbnail Start -->
    <!-- TODO ДАННЫЕ ТОВАРА -->
    <div class="main-product-thumbnail pb-60">
      <div class="container">
        <div class="row">
          <!-- Main Thumbnail Image Start -->
          <div class="col-lg-5">
            <!-- Thumbnail Large Image start -->
            <div class="tab-content">
              <div  v-for="(photo, index) in product.photos" :class="{'active':index === 0}"  class="tab-pane active">
                <a data-fancybox="images" href="#"><img :src="photo"
                                                                            alt="product-view"></a>
              </div>
            </div>
            <!-- Thumbnail Large Image End -->

            <!-- Thumbnail Image End -->
            <div class="product-thumbnail">
              <div class="thumb-menu nav">
                <a v-for="(photo, index) in product.photos" :class="{'active':index === 0}" data-toggle="tab"> <img :src="photo"
                                                                         alt="product-thumbnail"></a>
              </div>
            </div>
            <!-- Thumbnail image end -->
          </div>
          <!-- Main Thumbnail Image End -->
          <!-- Thumbnail Description Start -->
          <div class="col-lg-7">
            <div class="thubnail-desc fix">
              <h3 class="product-header">{{product.name}}</h3>

              <div class="pro-price mb-10">
                <p>
                  <span class="price">${{ product.per_hour }}/hour</span>
                </p>
              </div>
              <div class="pro-ref mb-15">
                <p><span class="in-stock">Leased by: </span><span class="sku"><a
                    href="">{{ product.owner_id }}</a></span></p>
              </div>
              <!-- TODO СРОК -->
              <div class="box-quantity">
                <form action="#">
                  <v-date-picker></v-date-picker>
                  <input class="number" id="numeric" placeholder="time">
                  <button class="add-cart">add to cart</button>
                </form>
              </div>
            </div>
          </div>
          <!-- Thumbnail Description End -->
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Product Thumbnail End -->
    <!-- Product Thumbnail Description Start -->
    <div class="thumnail-desc pb-60">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="main-thumb-desc nav">
              <li><a class="active" data-toggle="tab" href="#dtail">Details</a></li>
            </ul>
            <!-- Product Thumbnail Tab Content Start -->
            <div class="tab-content thumb-content border-default">
              <div id="dtail" class="tab-pane in active">
                {{ product.description }}
              </div>
            </div>
            <!-- Product Thumbnail Tab Content End -->
          </div>
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Product Thumbnail Description End -->

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";

export default {
  name: "Product",
  components: {SharitoFooter, SharitoHeader},
  data() {
    return {
      product: {
        pricePerHour: 1,
        company: {
          name: 'foo'
        }
      }
    }
  },
  async created() {
    let id = this.$route.params.id;
    let response = await this.$store.dispatch('getProduct', {id: id});
    if (!!response.success){
      this.product = response.data;
    } else {
    }
  }
}
</script>

<style scoped>

</style>