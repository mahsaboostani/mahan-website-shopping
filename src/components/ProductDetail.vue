<template>
  <div>
    <router-link
      :to="{
        name: 'ProductCard',
        params: { id: product.id, category: this.category },
      }"
    >
      <div class="card d-flex flex-sm-wrap p-1">
        <img
          class="card-img-top"
          :src="require(`@/assets/${category}/${product.image}`)"
          :alt="product.title"
        />
        <div class="card-body">
          <h5>{{ product.title }}</h5>
          <h5>{{ product.price }}</h5>
        </div>
      </div>
      <div>
        <a href="#" class="btn btn-primary">View product</a>
      </div>
    </router-link>
    <a @click="addToCart" href="#" class="btn btn-primary m-2">Add to cart</a>
  </div>
</template>

<script>
export default {
  props: ["product", "category"],
  name: "ProductDetail",
  methods: {
    addToCart() {
      console.log(this.product);
      this.$store.dispatch("addToCart", this.product);
      alert("The product has been added to cart");
    },
  },
};
</script>
<style scoped>
.card {
  border: 0;
}
.card img {
  width: 500px;
  height: 800px;
}
</style>
