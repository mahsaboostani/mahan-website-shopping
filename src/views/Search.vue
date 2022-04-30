<template>
  <div class="container">
    <div
      class="d-flex flex-sm-row justify-content-sm-center align-items-center"
    >
      <div class="col-md col-sm d-flex justify-content-center">
        <select class="m-2 mb-0" v-model="category">
          <option disabled value="">category</option>
          <option>women</option>
          <option>men</option>
          <option>kids</option>
        </select>
        <input
          class="w-100 border-top-0"
          @click="hideProduct"
          type="text"
          v-model="search"
          placeholder="Product: jacket,jeans,..."
        />
        <button @click="getProduct" class="bg-dark text-light p-0">
          Search
        </button>
      </div>
    </div>
    <div class="row d-flex align-items-center mt-5">
      <div v-show="showLoading" class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>

    <div class="row mt-5" v-if="showProducts">
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
input {
  border-left: 0px;

  border-right: 0px;

  border-bottom: 2px solid rgba(0, 0, 0, 0.5) !important;
}
/* .row {
  border: 0;
}



@media only screen and (max-width: 768px) {
  .card img {
    width: 350px;
    height: 550px;
  }
  select {
    height: 30px;
  }
  input {
    width: 100%;
    padding: 0px 50px;

    border-left: 0px;
    border-top: 0px;
    border-right: 0px;

    border-bottom: 2px solid rgba(0, 0, 0, 0.5) !important;
  }
} */
</style>
