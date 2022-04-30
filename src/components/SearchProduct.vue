<template>
  <div class="search-wrapper panel-heading col-sm-12">
    <label for="">please inter category</label>
    <input type="text" v-model="category" />
    <label for="">item</label>
    <input type="text" v-model="search" placeholder="Search" />
  </div>
  <div v-for="item in searchProd" :key="item.id">
    <h2>{{ item.title }}</h2>
    <h2>{{ item.price }}</h2>
  </div>
</template>
<script>
import EventService from "./../services/EventService.js";
export default {
  data() {
    return {
      womenproducts: [],
      category: "",
      search: "",
    };
  },
  computed: {
    searchProd() {
      let se = [];
      if (this.search !== "") {
        se = this.products.filter((p) =>
          p.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        se = this.products;
      }
      return se;
    },
  },
  created() {
    console.log(this.category);
    EventService.getEvents(this.category)
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
