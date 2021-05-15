<template>
  <div class="wrapper">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area ptb-60 ptb-sm-30">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li><a href="index-2.html">Home</a></li>
            <li class="active"><a href="account.html">Account</a></li>
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
                  <h4>Name</h4>
                  <h4>Surname</h4>
                  <h4>mail@mail.ru</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-2">
              <!-- Nav tabs -->
              <ul class="nav flex-column dashboard-list" role="tablist">
                <li><a data-toggle="tab" href="#orders">My Orders</a></li>
                <li><a data-toggle="tab" href="#ordered_from_me">Ordered from me</a></li>
                <li><a href="login.html" >logout</a></li>
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
  components: {SharitoFooter, SharitoHeader}
}
</script>

<style scoped>

</style>