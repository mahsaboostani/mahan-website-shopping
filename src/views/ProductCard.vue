<template>
  <div v-if="product">
    <div class="card col-md-5 text-center">
      <img
        class="card-img-top"
        :src="require(`@/assets/${category}/${product.image}`)"
        :alt="product.title"
      />
      <div class="card-body">
        <h5>{{ product.title }}</h5>
        <h5>{{ product.price }}</h5>
        <a @click="addToCart" href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
</template>
<script>
import EventService from "./../services/EventService";
export default {
  props: ["id", "category"],
  data() {
    return {
      product: null,
    };
  },
  created() {
    EventService.getEvent(this.category, this.id)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
