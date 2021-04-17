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
/*@import "css/style.css";*/
/*@import "plugins/intl-tel-input/css/intlTelInput.css";*/
</style>

