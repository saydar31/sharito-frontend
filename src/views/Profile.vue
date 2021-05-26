<template>
  <div class="wrapper">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area ptb-60 ptb-sm-30">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li><router-link :to="{name: 'Index'}">Home</router-link></li>
            <li class="active"><a href="#">Account</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- My Account Page Start Here -->
    <div class="my-account white-bg pb-60">
      <div class="container">
        <div class="account-dashboard">
          <div class="dashboard-upper-info">
            <div class="row no-gutters align-items-center">
              <div class="col-lg-3 col-md-6">
                <div class="d-single-info">
                  <h4>{{user.first_name}}</h4>
                  <h4>{{ user.last_name }}</h4>
                  <h4>{{ user.email }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-2">
              <!-- Nav tabs -->
              <ul class="nav flex-column dashboard-list" role="tablist">
                <li><router-link  :to="{name: 'MyOrders'}" href="#">My Orders</router-link></li>
                <li><router-link :to="{name: 'OrderedFromMe'}" >Ordered from me</router-link></li>
                <li><a @click.prevent="logout" href="#" >logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- My Account Page End Here -->

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";
export default {
  name: "Profile",
  components: {SharitoFooter, SharitoHeader},
  data(){
    return {
      user: {}
    }
  },

  created() {
    this.user = this.$store.getters.authUser
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>