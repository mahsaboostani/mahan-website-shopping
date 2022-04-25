<template>
  <div
    @click.prevent.capture.stop
    class="p-2"
    aria-labelledby="triggerId"
    :class="{ show: active }"
  >
    <div v-for="item in cart" :key="item.id">
      <div
        class="d-flex justify-content-between border-bottom align-items-center"
      >
        <div class="m-2 p-2">
          <strong>{{ item.title }}</strong>
        </div>

        <i
          @click.prevent="removeFromCart(item)"
          class="bi text-dark bi-dash-lg"
        ></i>
        <span class="border p-2">{{ item.quantity }}</span>
        <i @click.prevent="addToCart(item)" class="bi text-dark bi-plus-lg"></i>
        >${{ item.price }}

        <div>
          <i
            @click="removeProduct(item)"
            class="bi text-dark p-3 w-100 bi-trash-fill"
          ></i>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: {{ totalPrice }} </span>
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <router-link :to="{ name: 'Basket' }">
      <a class="text-dark m-2">Check Out</a>
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
</style>
