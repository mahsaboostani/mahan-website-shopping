<template>
  <div
    id="drop"
    class="p-2"
    style="min-width: 320px; right: 0; left: auto; top: 50%"
    aria-labelledby="triggerId"
    :class="{ show: activeLogged && logged }"
  >
    <div class="text-center">
      <p class="font-weight-bold text-light bg-danger">
        {{ name }} you logged in
      </p>
      <div class="sign row justify-content-center">
        <router-link :to="{ name: 'Dashboard' }">
          <a class="text-dark m-2">Dashboard</a>
        </router-link>
      </div>
      <div>
        <a @click="exiteAccount" class="text-dark m-2">Log Out</a>
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
/* .dropdown-menu {
  background-color: #efefef;
}
.dropdown-menu .sign {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.dropdown-menu a {
  text-decoration: none;
  cursor: pointer;
} */
</style>
