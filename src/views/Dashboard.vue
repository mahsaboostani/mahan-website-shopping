<template>
  <div class="container">
    <div class="option">
      <div class="row">
        <div class="col-md mr-5 text-left justify-content-end">
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
        <div class="col-md mr-5 text-left justify-content-end">
          <div>
            <h4>Account</h4>
          </div>
          <div>
            <p>Email, Password, Log Out,...</p>
          </div>
        </div>
        <div class="col-md text-dark">
          <router-link :to="{ name: 'Account' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right" style="font-size: 27px"></i></a
          ></router-link>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="row">
        <div class="col-md mr-5 text-left justify-content-end">
          <div>
            <h4>Address</h4>
          </div>
          <div>
            <p>Shipping and Billing Address</p>
          </div>
        </div>
        <div class="col-md text-dark">
          <router-link :to="{ name: 'Address' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right" style="font-size: 27px"></i></a
          ></router-link>
        </div>
      </div>
    </div>
    <div class="option">
      <div class="row">
        <div class="col-md mr-5 text-left justify-content-end">
          <div>
            <h4>Basket</h4>
          </div>
          <div>
            <p>Check Out</p>
          </div>
        </div>
        <div class="col-md text-dark">
          <router-link :to="{ name: 'Basket' }">
            <a class="font-weight-bold text-dark" href="#"
              ><i class="bi bi-chevron-right" style="font-size: 27px"></i></a
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
  margin: 100px;
}
</style>
