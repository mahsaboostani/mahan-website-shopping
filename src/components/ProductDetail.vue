<template>
  <router-link
    :to="{
      name: 'ProductCard',
      params: { id: product.id, category: this.category },
    }"
  >
    <div class="card d-flex flex-sm-wrap p-1">
      <img
        class="card-img-top"
        :src="require(`@/assets/${category}/${product.image}`)"
        :alt="product.title"
      />
      <div class="card-body">
        <h5>{{ product.title }}</h5>
        <h5>{{ product.price }}</h5>
        <a href="#" class="btn btn-primary">View product</a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["product", "category"],
  name: "ProductDetail",
};
</script>
<style scoped>
.card {
  border: 0;
}
.card img {
  width: 500px;
  height: 800px;
}
</style>
