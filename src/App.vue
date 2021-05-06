<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

import {Validator} from 'vee-validate';
import {MLBuilder} from 'vue-multilanguage';


export default {

  name: 'App',


  async created() {

  },


  mounted() {
    Validator.localize('en', this.$ml.get('errors'));
  }
}
</script>

<style>
@import "css/style.css";
@import "css/meanmenu.min.css";
@import "css/animate.css";
@import "css/nivo-slider.css";
@import "css/slick.css";
@import "css/font-awesome.min.css";
@import "css/jquery.fancybox.css";
@import "css/bootstrap.min.css";
@import "css/default.css";
@import "css/responsive.css";
</style>

