<template>
  <div>
    <h3></h3>
  </div>
  <div class="row m-5">
    <div class="col-md w-100" v-for="(item, key) in cart" :key="item.index">
      <div class="card d-flex justify-content-between">
        <div>
          <img
            class="card-img-top mb-4"
            :src="require(`@/assets/${category[key]}/${item.image}`)"
            :alt="item.title"
          />
        </div>
        <div class="card-body d-flex text-center align-content-center">
          <strong class="mr-4 h7 font-weight-bold">{{ item.title }}</strong>
          <p class="mr-4">${{ item.price }}</p>

          <a @click.prevent="removeFromCart(item)" href=""
            ><i class="bi text-dark bi-dash-lg mr-4"></i
          ></a>
          <span class="border-bottom pl-2 pr-2 mr-4">{{ item.quantity }}</span>
          <a @click.prevent="addToCart(item)" href=""
            ><i class="bi text-dark bi-plus-lg mr-4"></i
          ></a>

          <div>
            <a @click="removeProduct(item)" href="#">
              <i class="bi text-dark w-100 bi-trash-fill mr-4"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
  <div class="d-flex justify-content-start align-items-center">
    <span class="m-5 h3 font-weight-bold">Total: {{ totalPrice }} </span>
    <router-link :to="{ path: '/dashboard/address' }"
      ><a class="m-5 btn btn-dark pl-5 pr-5" href="#"
        ><p class="h5">Continue</p></a
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
<style scoped>
.card {
  border: 0;
  border-bottom: 0px;
}
.card img {
  height: 500px;
  width: 400px;
}
.card-body {
  margin-left: 20px;
  justify-content: center;
}
</style>
