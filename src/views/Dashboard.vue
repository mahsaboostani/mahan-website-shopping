<template>
  <div>
    <h4>{{ name }}</h4>
  </div>
</template>
<script>
export default {
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
};
</script>
