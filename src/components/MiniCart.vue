<template>
  <div class="m-3" aria-labelledby="triggerId" :class="{ show: active }">
    <div class="mb-4 border-bottom" v-for="item in cart" :key="item.id">
      <div class="row d-flex">
        <div class="col-md mb-2">
          <strong>{{ item.title }}</strong>
        </div>
        <div class="col-md">
          <strong>${{ item.price }}</strong>
        </div>
      </div>
      <div class="d-flex">
        <a @click.prevent.capture.stop="removeFromCart(item)" href="#"
          ><i class="bi text-dark bi-dash-lg mr-4"></i
        ></a>

        <span class="mr-4">{{ item.quantity }}</span>
        <a @click.prevent.capture.stop="addToCart(item)" href="#"
          ><i class="bi text-dark bi-plus-lg mr-4"></i
        ></a>

        <a @click.prevent.capture.stop="removeProduct(item)" href="#"
          ><i class="bi text-dark bi-trash-fill mr-4"></i
        ></a>
      </div>
    </div>
    <div class="d-flex justify-content-between mr-2">
      <p><span class="font-weight-bold">Total: </span>{{ totalPrice }}</p>
    </div>
  </div>
  <div class="d-flex justify-content-between m-3">
    <router-link :to="{ name: 'Basket' }">
      <span><a class="btn btn-dark" href="#">Check Out</a> </span></router-link
    >
  </div>
</template>
<script>
export default {
  name: "MiniCart",
  props: ["active"],
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotal;
    },
    category() {
      return this.$store.state.category;
    },
  },
  methods: {
    addToCart(item) {
      console.log(this.product);
      this.$store.dispatch("addToCart", item);
    },
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    removeProduct(item) {
      this.$store.dispatch("removeProduct", item);
    },
  },
};
</script>
<style scoped>
.show {
  display: block;
}
.row {
  align-items: center;
}
</style>
