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
        <div
          class="card-body d-flex justify-content-around align-content-center"
        >
          <strong>{{ item.title }}</strong>

          <a @click.prevent="removeFromCart(item)" href=""
            ><i class="bi text-dark bi-dash-lg"></i
          ></a>
          <span class="border pl-2 pr-2">{{ item.quantity }}</span>
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
    </div>
    <hr />
  </div>
  <div class="row">
    <span class="h3 font-weight-bold mt-5 ml-5">Total: {{ totalPrice }} </span>
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
  width: 400px;
  justify-content: center;
}
</style>
