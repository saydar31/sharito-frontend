<template>
  <div class="wrapper">
    <!-- Header Area Start -->
    <SharitoHeader/>
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-area ptb-60 ptb-sm-30">
      <div class="container">
        <div class="breadcrumb">
          <ul>
            <li>
              <router-link :to="{name: 'Profile'}" href="index-2.html">Home</router-link>
            </li>
            <li class="active"><a href="#">Add product</a></li>
          </ul>
        </div>
      </div>
      <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    <!-- My Account Page Start Here -->

    <div class="main-product-thumbnail pb-60">
      <div class="container">

        <div class="row">
          <div class="col-sm-12">
            <div class="register-title">
              <h3 class="mb-10">Add product</h3>
              <p class="mb-10">Добавте фотографии и описание товара</p>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Main Thumbnail Image Start -->
          <div class="col-lg-12">
            <fieldset class="form-group">
              <a class="add-cart" href="#" @click.prevent="$refs.imageInput.click()">Upload Image</a>
              <input ref="imageInput" type="file" @change="addFileToList" style="display: none;"
                     class="form-control" multiple>
            </fieldset>
            <!-- Thumbnail Large Image start -->
            <div class="tab-content preview-images-zone ui-sortable">
              <div v-for="(url, index) in fileUrls" class="preview-image">
                <div @click="removeFile(index)" class="image-cancel">x</div>
                <div class="image-zone">
                  <img :src="url">
                </div>
              </div>
            </div>
            <!-- Thumbnail Large Image End -->
          </div>
          <!-- Main Thumbnail Image End -->
        </div>
        <!-- Row End -->

        <div class="row">
          <div class="col-sm-12">
            <form class="form-horizontal" action="#">
              <fieldset>
                <legend>Описание</legend>
                <div class="form-group">
                  <label class="control-label" for="productName"><span class="require">*</span>Название товара</label>
                  <div class="col-sm-10">
                    <input v-model.trim="name" type="text" class="form-control" id="productName"
                           placeholder="Название товара">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="productPrice"><span class="require">*</span>Цена в час</label>
                  <div class="col-sm-10">
                    <input v-model="price" @keypress="onlyNumbers" type="text" class="form-control" id="productPrice"
                           placeholder="Цена в час">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label" for="description">Описание</label>
                  <div class="col-sm-10 form-group">
                    <textarea v-model="description" type="text" class="form-control rounded-0" rows="8" id="description"
                              placeholder="Описание"></textarea>
                  </div>
                </div>
              </fieldset>

              <div class="buttons newsletter-input">
                <div class="pull-right">Согласен на обработку данных <a href="#" class="agree"><b>Политика
                  Конфиденциальности</b></a>
                  <input v-model="agree" type="checkbox" name="agree" value="1"> &nbsp;
                  <button @click.prevent="createNewProduct"
                          :disabled="!agree || !parseInt(price) || name.length === 0" type="submit"
                          class="newsletter-btn">Добавить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
      <!-- Container End -->
    </div>


    <!-- My Account Page End Here -->

    <SharitoFooter/>
    <!-- Footer End -->
  </div>
</template>

<script>
import SharitoHeader from "@/components/SharitoHeader";
import SharitoFooter from "@/components/SharitoFooter";
import inputValidator from "@/mixins/inputValidator";

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
export default {
  name: "NewItem",
  components: {SharitoFooter, SharitoHeader},
  mixins: [inputValidator],
  data() {
    return {
      files: [],
      fileUrls: [],
      name: '',
      price: 0,
      description: '',
      agree: false,
      fileError: false
    }
  },

  mounted() {
  },

  methods: {
    async addFileToList(event) {
      let file = event.target.files[0];
      if (this.files.length < 5) {
        this.sizeError = false;
        this.fileError = false;
        let fileType = file.type.toString();
        console.log(fileType);
        let acceptableTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!(acceptableTypes.includes(fileType))) {
          this.fileError = true;
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          this.sizeError = true;
          return;
        }
        this.files.push(file);
        this.fileUrls.push(await toBase64(file));
      }
    }
    ,
    removeFile(index) {
      this.fileUrls.splice(index, 1);
      this.files.splice(index, 1);
    },

    async createNewProduct() {
      let body = {
        name: this.name,
        per_hour: parseFloat(this.price),
        description: this.description,
        photos: this.fileUrls
      }
      let response = await this.$store.dispatch('addProduct', body);
      if (response.success) {
        let productId = response.data.product_id;
        this.$router.push({name: 'Product', params: {id: productId}})
      }
    }
  }
}
</script>

<style scoped>

</style>