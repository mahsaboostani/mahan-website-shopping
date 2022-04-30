<template>
  <div class="m-2" aria-labelledby="triggerId" :class="{ show: active }">
    <div class="mb-1 border-bottom" v-for="item in cart" :key="item.id">
      <div class="row d-flex align-items-center">
        <div class="col-md">
          <h6 class="h6 small">{{ item.title }}</h6>
        </div>
        <div>
          <h6 class="h6 small">${{ item.price }}</h6>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <a @click.prevent.capture.stop="removeFromCart(item)" href="#"
          ><i class="bi text-dark bi-dash-lg"></i
        ></a>

        <span class="mr-4">{{ item.quantity }}</span>
        <a @click.prevent.capture.stop="addToCart(item)" href="#"
          ><i class="bi text-dark bi-plus-lg"></i
        ></a>

        <a @click.prevent.capture.stop="removeProduct(item)" href="#"
          ><i class="bi text-dark bi-trash-fill"></i
        ></a>
      </div>
    </div>
    <div class="d-flex justify-content-between mr-2">
      <p><span class="font-weight-bold">Total: </span>{{ totalPrice }}</p>
    </div>
  </div>
  <div class="col-md d-flex justify-content-start">
    <router-link :to="{ path: '/dashboard/basket' }">
      <a class="btn btn-dark p-1 m-1" href="">Check Out</a>
    </router-link>
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
/* 
.row {
  align-items: center;
}
*/
/* @media only screen and (max-width: 768px) {
  div h6 {
    font-size: 10px !important;
  }
} */
</style>
