<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto; top: 50%"
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
        <a @click.prevent="removeFromCart(item)" href=""
          ><i class="bi text-dark bi-dash-lg"></i
        ></a>
        <span class="border p-2">{{ item.quantity }}</span>
        <a @click.prevent="addToCart(item)" href=""
          ><i class="bi text-dark bi-plus-lg"></i></a
        >${{ item.price }}

        <div>
          <a @click="removeProduct(item)" href="#">
            <i class="bi text-dark p-3 w-100 bi-trash-fill"></i
          ></a>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: {{ totalPrice }} </span>
    </div>
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
.dropdown-menu .show {
  display: block;
}
</style>
