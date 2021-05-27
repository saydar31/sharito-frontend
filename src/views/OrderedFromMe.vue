<template>
  <div class="wrapper">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Header Area End -->
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area pt-60 pb-55 pt-sm-30 pb-sm-20">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li>
              <router-link :to="{name: 'Index'}">Home</router-link>
            </li>
            <li class="active"><a href="#">Ordered from me</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- Cart Main Area Start -->
    <div class="cart-main-area pb-80 pb-sm-50">
      <div class="container">
        <h2 class="text-capitalize sub-heading">Ordered from me</h2>
        <div class="row">
          <div class="col-md-12">
            <!-- Form Start -->
            <form action="#">
              <!-- Table Content Start -->
              <div class="table-content table-responsive mb-50">
                <table>
                  <thead>
                  <tr>
                    <th class="product-thumbnail">Image</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product-time">Time</th>
                    <th class="product-subtotal">Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="order in orders">
                    <td class="product-thumbnail">
                      <a v-if="photoIsPresent(order.product)" href="#"><img :src="getPhoto(order.product)" alt="cart-image"/></a>
                      <a v-else href="#"><img src="../img/products/1.jpg" alt="cart-image"/></a>
                    </td>
                    <td class="product-name"><a href="#">{{ order.product.name }}</a></td>
                    <td class="product-price"><span class="amount">${{ order.per_hour }}/hour</span></td>
                    <td class="product-name">
                      <span class="amount">From</span>
                      <span class="amount">{{ order.from }}</span>
                      <br>
                      <span class="amount">&zwj; To</span>
                      <span class="amount">{{ order.to }}</span>
                    </td>
                    <td class="product-subtotal">${{ order.price }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <!-- Table Content Start -->
            </form>
            <!-- Form End -->
          </div>
        </div>
        <!-- Row End -->
      </div>
    </div>
    <!-- Cart Main Area End -->
    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoFooter from "@/components/SharitoFooter";
import SharitoHeader from "@/components/SharitoHeader";
import formater from "@/mixins/formater";

export default {
  name: "OrderedFromMe",
  components: {SharitoHeader, SharitoFooter},
  mixins: [formater],
  data() {
    return {
      orders: []
    }
  },

  created() {
    this.getOrders();
  },

  methods: {
    async getOrders() {
      let response = await this.$store.dispatch('getOrders', {me: false});
      if (response.success) {
        this.orders = response.data;
      }
    }
  }
}
</script>

<style scoped>

</style>