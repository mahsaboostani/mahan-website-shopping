<template>
  <div class="w-25">
    <router-link
      :to="{
        name: 'ProductCard',
        params: { id: product.id, category: category },
      }"
    >
      <div class="card d-flex border-none justify-content-center">
        <img
          class="card-img-top"
          :src="require(`@/assets/${category}/${product.image}`)"
          :alt="product.title"
        />
      </div>
    </router-link>
    <div class="card-body">
      <h6 class="h6" style="font-family: Playfair Display, serif">
        {{ product.title }}
      </h6>
      <div class="d-flex h6 justify-content-center">
        <h6 :class="{ saleShow: showSale }">$ 70</h6>
        <h6 class="text-danger" v-if="showSale">$ {{ product.price }}</h6>
      </div>

      <a
        @click="addToCart"
        href="#"
        class="btn btn-dark text-light p-1 rounded-pill"
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
.card-img-top:hover {
  border: 3px solid rgba(0, 0, 0, 0.4);
}

.card-body {
  font-family: "Arima Madurai", cursive;
  font-family: "EB Garamond", serif;
  font-family: "Libre Baskerville", serif;
}
.saleShow {
  text-decoration-line: line-through;
  margin-right: 2.5vh;
}

@media only screen and (max-width: 768px) {
  .btn {
    font-size: 0.5rem;
    border-radius: 0px !important;
    padding: 0px !important;
  }
  .card-body h6 {
    font-size: 0.4rem;
  }
}
</style>
