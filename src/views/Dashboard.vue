<template>
  <div class="container">
    <div class="option">
      <div class="row mt-5">
        <div class="col-md text-start">
          <div>
            <h4>{{ name }}</h4>
          </div>
          <div>
            <p>{{ email }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="row">
        <div
          class="col-md col-auto me-auto text-start me-5 justify-content-end"
        >
          <div>
            <h4>Account</h4>
          </div>
          <div>
            <p>Email,Password,...</p>
          </div>
        </div>
        <div class="col-md col-auto text-dark">
          <router-link :to="{ name: 'Account' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right h4"></i></a
          ></router-link>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="row">
        <div
          class="col-md col-auto me-auto mr-5 text-start justify-content-end"
        >
          <div>
            <h4>Address</h4>
          </div>
          <div>
            <p>Shipping Address...</p>
          </div>
        </div>
        <div class="col-md col-auto text-dark">
          <router-link :to="{ name: 'Address' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right h4"></i></a
          ></router-link>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="row d-sm-flex">
        <div
          class="col-md col-auto me-auto mr-5 text-start justify-content-end"
        >
          <div>
            <h4>Basket</h4>
          </div>
          <div>
            <p>Check Out</p>
          </div>
        </div>
        <div class="col-md col-auto text-dark">
          <router-link :to="{ name: 'Basket' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right h4"></i></a
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    name() {
      return this.$store.state.name;
    },
    email() {
      return this.$store.state.email;
    },
  },
};
</script>
<style scoped>
.option {
  margin: 5rem;
}
</style>
