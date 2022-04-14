<template>
  <div class="container">
    <div class="row">
      <ProductDetail
        v-for="item in products"
        :key="item.id"
        :product="item"
        :category="category"
      />
    </div>
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
    };
  },
  created() {
    this.category = this.$route.params.category;
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
}
.col {
  width: 300;
  height: 800px;
}
</style>
