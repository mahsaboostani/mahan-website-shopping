<template>
  <div
    id="drop"
    class="p-2"
    aria-labelledby="triggerId"
    :class="{ show: activeLogged && logged }"
  >
    <div class="text-center">
      <p class="font-weight-bold text-light bg-danger">
        {{ name }}
      </p>
      <div class="sign row justify-content-center">
        <router-link class="text-decoration-none" :to="{ name: 'Dashboard' }">
          <h6 class="text-dark mb-2">Dashboard</h6>
        </router-link>
      </div>
      <div>
        <a
          href="#"
          @click="exiteAccount"
          class="text-dark m-2 text-decoration-none pe-auto"
          >Log Out</a
        >
      </div>
      <!-- <div class="row justify-content-center">
        <a @click="exiteAccount" class="text-dark">Log Out</a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["activeLogged"],
  computed: {
    name() {
      return this.$store.state.name;
    },
    logged() {
      return this.$store.state.logged;
    },
  },
  methods: {
    exiteAccount() {
      this.$store.dispatch("logOut");
    },
  },
};
</script>
<style scoped>
.show {
  display: block;
}
</style>
