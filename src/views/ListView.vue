<template>
  <div class="row justify-content-center">
    <div
      class="card col-md-5 text-center m-3"
      v-for="event in events"
      :key="event.id"
    >
      <img
        class="card-img-top"
        :src="require(`@/assets/${category}/${event.image}`)"
        :alt="event.title"
      />
      <div class="card-body">
        <h5>{{ event.title }}</h5>
        <h5>{{ event.price }}</h5>
        <a href="#" class="btn btn-primary">Add to basket</a>
      </div>
    </div>

    <!-- <div
      class="pic_sub z-index-master"
      :style="`list-style-image: url(${loadImg(event.image)})`"
      :alt="event.title"
    ></div> -->
  </div>
</template>

<script>
import { apiClient } from "./../services/EventService";
import { useRoute } from "vue-router";
//const images = require.context("../assets", false, /\.svg$|\.jpg$/);
export default {
  name: "ListView",
  data() {
    return {
      events: [],
      category: "",
    };
  },
  created() {
    const route = useRoute();
    this.category = route.params.category;
    apiClient
      .get(this.category)
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.card {
  border: 0;
}
.card-img-top {
  width: 500;
  height: 800px;
}
</style>
