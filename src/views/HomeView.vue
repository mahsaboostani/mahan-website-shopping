<template>
  <!---navbar-->

  <nav class="navbar navbar-expand fixed-bottom" id="navmenu" ref="navmenu">
    <div class="container align-items-center justify-content-center pb-5 pt-0">
      <ul id="myMenu" class="navbar-nav">
        <li data-menuanchor="women" class="nav-item pr-4">
          <a class="nav-link active" aria-current="page" href="#women"
            >Mahan women</a
          >
        </li>
        <li data-menuanchor="men" class="nav-item pr-4">
          <a class="nav-link" href="#men">Mahan men</a>
        </li>
        <li data-menuanchor="kids" class="nav-item pr-4">
          <a class="nav-link" href="#kids">Mahan kids</a>
        </li>
        <li data-menuanchor="sale" class="nav-item pr-4">
          <a class="nav-link" href="#sale">Sales</a>
        </li>
        <li data-menuanchor="contact" class="nav-item pr-4">
          <a class="nav-link" href="#contact">Contact us</a>
        </li>
      </ul>
    </div>
  </nav>

  <!---women clothes-->
  <div id="fullpage">
    <section class="section" data-anchor="women">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'women' } }"
          ><img class="img-fluid" src="../assets/women.svg" alt=""
        /></router-link>
      </div>
    </section>

    <!---men clothes-->
    <section class="section" data-anchor="men">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'men' } }"
          ><img class="img-fluid" src="../assets/men.svg" alt=""
        /></router-link>
      </div>
    </section>

    <!---kids clothes-->
    <section class="section" data-anchor="kids">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'kids' } }"
          ><img class="img-fluid" src="../assets/kids.svg" alt=""
        /></router-link>
      </div>
    </section>

    <!---sales-->
    <section class="section" data-anchor="sale">
      <div class="container">
        <a class="mylink" href="#">
          <router-link :to="{ name: 'ListView', params: { category: 'sale' } }"
            ><img class="img-fluid" src="../assets/sale.svg" alt=""
          /></router-link>
        </a>
      </div>
    </section>

    <!---contact us-->
    <section class="section" data-anchor="contact">
      <div class="container text-left">
        <div class="row">
          <div class="col-md">
            <h3>About us</h3>
            <p class="font-weight-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero
              voluptatum quo distinctio et eligendi cupiditate facilis quod,
              molestias error aut architecto saepe, culpa ullam magni deserunt.
              Cum, consectetur incidunt!
            </p>
          </div>
          <div class="col-md">
            <form class="d-flex flex-column">
              <label><span class="font-weight-bold">Email</span></label>
              <input type="email" />
              <label><span class="font-weight-bold">Question</span></label>
              <textarea
                name="quest"
                id="question"
                cols="10"
                rows="5"
              ></textarea>
              <div class="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div class="col-md text-left">
            <h3>Contact us</h3>

            <p>
              <span class="font-weight-bold">Email:</span>
              eng.m.boostani@gmail.com
            </p>
            <p><span class="font-weight-bold">Tel:</span> 0785566443</p>
            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
          </div>
        </div>
        <div class="row p-5">
          <div class="col-md text-center">
            <p>Copyright &copy; 2022 Mahan</p>
          </div>
        </div>
      </div>

      <!---footer-->
      <footer class="text-dark text-center">
        <div class="container"></div>
      </footer>
    </section>
  </div>
</template>

<script>
//import fullpage from "fullpage.js";

//import { inject, toRefs, reactive } from "vue";
//import { createRouter, createWebHistory } from "vue-router";

export default {
  inject: ["fullpage"],
  data() {
    return {
      fullpage_api: null,
    };
  },
  mounted() {
    this.fullpage_api = new this.fullpage("#fullpage", {
      licenseKey: "gplv3-license",
      autoScrolling: true,
      scrollHorizontally: true,
      recordHistory: true,
      controlArrows: true,
      sectionsColor: ["#FFF", "#FFF", "#FFF", "#FFF", "#FFF"],
      anchors: ["women", "men", "kids", "sale", "contact"],
      menu: "#myMenu",
      afterLoad: function (origin, destination, direction, trigger) {
        if (
          origin &&
          destination.anchor == "contact" &&
          direction == "down" &&
          trigger
        ) {
          document.getElementById("navmenu").style.display = "none";
          // TODO: show a scroll up icon/button
        }
      },
      onLeave: function (origin, destination, direction, trigger) {
        if (
          origin.anchor == "contact" &&
          destination.anchor != "contact" &&
          direction == "up" &&
          trigger
        ) {
          document.getElementById("navmenu").style.display = "block";
        }
      },
    });
  },
  unmounted() {
    this.fullpage_api.destroy("all");
  },
};
</script>

<style scoped>
.active a {
  color: red !important;
}
section img {
  height: 70vh;
  /* widows: 100%; */
}
.fp-table {
  display: block;
}
.hide {
  display: none;
}
</style>
