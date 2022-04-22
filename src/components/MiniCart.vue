<template>
  <div
    class="dropdown-menu p-2"
    style="min-width: 320px; right: 0; left: auto; top: 50%"
    aria-labelledby="triggerId"
    :class="{ show: active }"
  >
    <div v-for="item in cart" :key="item.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.price }}
        </div>
        <div>
          <a @click="removeFromCart(item)" href="#" class="button"> Remove</a>
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
  },
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
  },
};
</script>
<style scoped>
.dropdown-menu .show {
  display: block;
}
</style>
