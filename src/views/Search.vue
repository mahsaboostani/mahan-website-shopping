<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md d-flex justify-content-start">
        <select v-model="category">
          <option disabled value="">category</option>
          <option>women</option>
          <option>men</option>
          <option>kids</option>
        </select>
        <div class="ml-5">
          <label class="font-weight-bold mr-2" for="">Product:</label>
          <input
            @click="hideProduct"
            type="text"
            v-model="search"
            placeholder="jacket,jeans,..."
          />
          <button @click="getProduct" class="ml-3 bg-dark text-light">
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-start text-center">
      <div v-show="showLoading" class="spinner-border m-5" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <div class="row" v-if="showProducts">
      <ProductDetail
        v-for="item in searchProd"
        :key="item.id"
        :product="item"
        :category="category"
      />
    </div>
    <div v-if="result" class="m-5">
      <h5>RESULT NOT FOUND</h5>
    </div>
  </div>
</template>
<script>
import EventService from "./../services/EventService.js";
import ProductDetail from "@/components/ProductDetail.vue";

export default {
  name: "Search",
  components: { ProductDetail },
  data() {
    return {
      womenproducts: [],
      menproducts: [],
      kidsproducts: [],
      category: "",
      search: "",
      showProducts: false,
      showLoading: false,
      result: false,
    };
  },
  computed: {
    searchProd() {
      let se = [];

      if (this.search !== "") {
        if (this.category === "women") {
          se = this.womenproducts.filter((p) =>
            p.title.toLowerCase().includes(this.search.toLowerCase())
          );
        }
        if (this.category === "men") {
          se = this.menproducts.filter((p) =>
            p.title.toLowerCase().includes(this.search.toLowerCase())
          );
        }
        if (this.category === "kids") {
          se = this.kidsproducts.filter((p) =>
            p.title.toLowerCase().includes(this.search.toLowerCase())
          );
        }
      }
      console.log("se", se);
      return se;
    },
  },

  methods: {
    async getProduct() {
      this.result = false;

      let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      this.showLoading = true;
      await sleep(4000);
      this.showLoading = false;
      this.showProducts = true;

      if (this.category === "women") {
        EventService.getEvents("women")
          .then((response) => {
            this.womenproducts = response.data;
            if (this.searchProd.length === 0) {
              console.log("result", this.searchProd);
              this.result = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (this.category === "men") {
        EventService.getEvents("men")
          .then((response) => {
            this.menproducts = response.data;
            if (this.searchProd.length === 0) {
              console.log("result", this.searchProd);
              this.result = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (this.category === "kids") {
        EventService.getEvents("kids")
          .then((response) => {
            this.kidsproducts = response.data;
            if (this.searchProd.length === 0) {
              console.log("result", this.searchProd);
              this.result = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    hideProduct() {
      this.showProducts = false;
    },
  },
};
</script>
<style scoped>
.row {
  border: 0;
}
.col {
  width: 300;
  height: 800px;
}
</style>
