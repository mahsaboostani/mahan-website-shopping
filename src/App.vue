<template>
  <!--logo-->
  <div class="container-fluid pt-2">
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-6 align-items-center justify-content-right">
        <img class="pb-2" src="./assets/logo.svg" />
      </div>
      <div class="col-md mr-5">
        <ul class="d-flex flex-row justify-content-end p-2 list-unstyled p-4">
          <li class="pr-3">
            <img src="./assets/search.svg" alt="" />
          </li>
          <li class="pr-3">
            <img src="./assets/User.svg" alt="" />
          </li>
          <li class="pr-3">
            <img src="./assets/Help.svg" alt="" />
          </li>
          <li class="pr-3">
            <a href=""
              ><MiniCart
                :active="active.showDropDown"
                :product="this.product" />
              <img
                @click.prevent="viewDropDown()"
                src="./assets/Shopping-Bag.svg"
                alt=""
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
import MiniCart from "@/components/MiniCart.vue";
export default {
  data() {
    return {
      active: { showDropDown: false },
    };
  },
  components: {
    MiniCart,
  },
  mounted() {
    this.$store.dispatch("updateCartFromLocalStorage");
  },
  methods: {
    viewDropDown() {
      if (this.active.showDropDown === false) {
        this.active.showDropDown = true;
      } else {
        this.active.showDropDown = false;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
