<template>
  <div class="row m-4">
    <div class="col-md-3 mb-4" v-for="(item, key) in cart" :key="item.index">
      <div class="card d-flex justify-content-between">
        <div>
          <img
            class="card-img-top mb-4"
            :src="require(`@/assets/${category[key]}/${item.image}`)"
            :alt="item.title"
          />
        </div>
        <div
          class="card-body d-flex justify-content-between align-content-center"
        >
          <h6 class="h6 font-weight-bold">{{ item.title }}</h6>
          <p class="mr-4">${{ item.price }}</p>

          <a @click.prevent="removeFromCart(item)" href=""
            ><i class="bi text-dark bi-dash-lg"></i
          ></a>
          <span class="border-bottom">{{ item.quantity }}</span>
          <a @click.prevent="addToCart(item)" href=""
            ><i class="bi text-dark bi-plus-lg"></i
          ></a>

          <div>
            <a @click="removeProduct(item)" href="#">
              <i class="bi text-dark w-100 bi-trash-fill"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-start align-items-center">
    <span class="m-5 h3 font-weight-bold">Total: {{ totalPrice }} </span>
    <router-link :to="{ path: '/product/payment' }"
      ><a class="m-5 btn btn-dark" href="#"
        ><p class="h5 p-1">Continue</p></a
      ></router-link
    >
  </div>
</template>
<script>
export default {
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
