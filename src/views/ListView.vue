<template>
  <div class="row">
    <ProductDetail
      v-for="item in products"
      :key="item.id"
      :product="item"
      :category="category"
      :showSale="showSale"
    />
  </div>
</template>

<script>
import EventService from "./../services/EventService.js";
import ProductDetail from "@/components/ProductDetail.vue";
//const images = require.context("../assets", false, /\.svg$|\.jpg$/);
export default {
  name: "ListView",
  components: { ProductDetail },
  data() {
    return {
      products: [],
      category: "",
      showSale: false,
    };
  },
  created() {
    this.category = this.$route.params.category;
    if (this.category === "sale") {
      this.showSale = true;
    }
    EventService.getEvents(this.category)
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.row {
  border: 0;
  margin: 50px;
}
@media only screen and (max-width: 768px) {
  .row {
    margin: 0px !important;
  }
}
</style>
