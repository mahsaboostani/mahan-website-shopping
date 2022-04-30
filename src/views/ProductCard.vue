<template>
  <div class="row d-flex align-items-center" v-if="product">
    <div class="col-md">
      <img
        class="card-img-top w-75"
        :src="require(`@/assets/${category}/${product.image}`)"
        :alt="product.title"
      />
    </div>

    <div class="col-md-3">
      <h5 style="font-family: Playfair Display, serif">
        {{ product.title }}
      </h5>
      <div class="mb-4">
        <h5>$ {{ product.price }}</h5>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          expedita quis tempora cum magnam repellendus voluptas ab nesciunt
          quam, quia aperiam cumque veritatis placeat doloremque tempore et
          tenetur. Molestias, debitis.
        </p>
      </div>

      <a
        @click="addToCart"
        href="#"
        class="btn m-2 btn-dark text-light rounded-pill"
        >Add to cart</a
      >
    </div>
    <div class="col-md"></div>
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
  computed: {
    cart() {
      return this.$store.state.cart;
    },
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
