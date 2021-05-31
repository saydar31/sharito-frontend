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
              <router-link :to="{name: 'Index'}" href="index-2.html">Home</router-link>
            </li>
            <li class="active"><a href="#">Shop</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- Shop Page Start -->
    <div class="main-shop-page pb-60">
      <div class="container">
        <!-- Row End -->
        <div class="row">

          <!-- Sidebar Shopping Option End -->
          <!-- Product Categorie List Start -->
          <div class="col-lg-9 order-lg-2">
            <!-- Grid & List View Start -->
            <!-- TODO Если не хочеться париться удалить выбор сетки товаров-->
            <div class="grid-list-top border-default universal-padding fix mb-30">
              <div class="grid-list-view f-left">
                <ul class="list-inline nav">
                  <li><a class="active" data-toggle="tab" href="#list-view"><i class="fa fa-list-ul"></i></a>
                  </li>
                  <li><span class="grid-item-list"> Items 1-12 of 13</span></li>
                </ul>
              </div>
            </div>

            <!-- Grid & List View End -->
            <div class="main-categorie">
              <!-- Grid & List Main Area End -->
              <div class="tab-content fix">

                <!-- TODO СЕТКА №1 -->
                <!-- #grid view End -->
                <!-- TODO СЕТКА №2 -->
                <div id="list-view" class="tab-pane active">
                  <!-- Single Product Start -->
                  <!-- TODO ДАННЫЕ ТОВАРА -->
                  <div v-for="product in products" class="single-product">
                    <!-- Product Image Start -->
                    <div class="pro-img">
                      <router-link :to="{name: 'Product', params: {id: product.id}}">
                        <img v-if="photoIsPresent(product)" class="primary-img" :src="getPhoto(product)" alt="single-product">
                        <img v-else class="primary-img" src="../img/products/1.jpg" alt="single-product">
                      </router-link>
                    </div>
                    <!-- Product Image End -->
                    <!-- Product Content Start -->
                    <div class="pro-content">
                      <h4>
                        <router-link :to="{name: 'Product', params: {id: product.id}}">{{product.name}}</router-link>
                      </h4>
                      <p>
                        <span class="price">${{ product.per_hour }}/час</span>
                      </p>
                      <p>{{ product.description }}</p>

                    </div>
                    <!-- Product Content End -->
                  </div>
                  <!-- Single Product Start -->

                </div>
                <!-- #list view End -->
              </div>
              <!-- Grid & List Main Area End -->
            </div>
            <!--Breadcrumb and Page Show Start -->
            <!--TODO ПАГИНАЦИЯ -->
            <div class="pagination-box fix">
              <ul class="blog-pagination ">
                <li v-if="currentPage !== 1"><a href="#"><i class="fa fa-angle-eft"></i></a></li>
                <li v-if="currentPage !== 1"><a href="#">{{ currentPage - 1 }}</a></li>
                <li class="active"><a href="#">{{ currentPage }}</a></li>
                <li v-if="(currentPage + 1) * 10 < totalCount"><a href="#">{{ currentPage + 1 }}</a></li>
                <li v-if="currentPage * 10 < totalCount"><a href="#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
            <!--Breadcrumb and Page Show End -->
          </div>
          <!-- product Categorie List End -->
        </div>
        <!-- Row End -->
      </div>
      <!-- Container End -->
    </div>
    <!-- Shop Page End -->

    <SharitoFooter/>
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";
import formater from '@/mixins/formater';

export default {
  name: "ProductsList",
  components: {SharitoFooter, SharitoHeader},
  mixins: [formater],
  data() {
    return {
      products: [],
      currentPage: 1,
      totalCount: 10
    }
  },

  async created() {
    let search = this.$route.query.q;
    let response = await this.$store.dispatch('getProducts', {page: 1, search: search});
    this.products = response.data.products;
    this.totalCount = response.count;
  },

}
</script>

<style scoped>

</style>