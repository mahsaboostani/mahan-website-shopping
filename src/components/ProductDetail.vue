<template>
  <div>
    <router-link
      :to="{
        name: 'ProductCard',
        params: { id: product.id, category: category },
      }"
    >
      <div class="card d-flex justify-content-center pl-4 pr-4">
        <img
          class="card-img-top"
          :src="require(`@/assets/${category}/${product.image}`)"
          :alt="product.title"
        />
      </div>
    </router-link>
    <div class="card-body mb-5">
      <h5 style="font-family: Playfair Display, serif">
        {{ product.title }}
      </h5>
      <div class="d-flex justify-content-center">
        <h6 :class="{ saleShow: showSale }">$ 70</h6>
        <h6 class="text-danger" v-if="showSale">$ {{ product.price }}</h6>
      </div>

      <a
        @click="addToCart"
        href="#"
        class="btn m-2 btn-dark text-light rounded-pill"
        >Add to cart</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "category", "showSale"],
  name: "ProductDetail",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  methods: {
    addToCart() {
      let item = this.cart.find((i) => i.id === this.product.id);
      if (!item) {
        this.$store.dispatch("addCategory", this.category);
      }
      console.log(this.product);
      this.$store.dispatch("addToCart", this.product);
    },
  },
};
</script>
<style scoped>
.card {
  border: 0;
}
.card-img-top:hover {
  border: 3px solid rgba(0, 0, 0, 0.4);
}
.card img {
  width: 400px;
  height: 600px;
}
.card-body {
  font-family: "Arima Madurai", cursive;
  font-family: "EB Garamond", serif;
  font-family: "Libre Baskerville", serif;
}
.saleShow {
  text-decoration-line: line-through;
  margin-right: 25px;
}
</style>
