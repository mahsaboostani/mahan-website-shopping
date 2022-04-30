<template>
  <!---navbar-->

  <nav class="navbar navbar-expand fixed-bottom" id="navmenu" ref="navmenu">
    <div class="container align-items-center justify-content-center">
      <ul id="myMenu" class="navbar-nav">
        <li data-menuanchor="women" class="nav-item pr-4">
          <a
            class="nav-link h6 text-dark active"
            aria-current="page"
            href="#women"
            >Mahan women</a
          >
        </li>
        <li data-menuanchor="men" class="nav-item pr-4">
          <a class="nav-link h6 text-dark" href="#men">Mahan men</a>
        </li>
        <li data-menuanchor="kids" class="nav-item pr-4">
          <a class="nav-link h6 text-dark" href="#kids">Mahan kids</a>
        </li>
        <li data-menuanchor="sale" class="nav-item pr-4">
          <a class="nav-link h6 text-dark" href="#sale">Sales</a>
        </li>
        <li data-menuanchor="contact" class="nav-item pr-4">
          <a class="nav-link h6 text-dark" href="#contact">Contact us</a>
        </li>
      </ul>
    </div>
  </nav>

  <!---women clothes-->
  <div id="fullpage">
    <section class="section d-block" data-anchor="women">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'women' } }">
          <img
            class="img float-md-left float-right"
            src="../assets/women.svg"
            alt=""
          />
        </router-link>
      </div>
    </section>

    <!---men clothes-->
    <section class="section d-block" data-anchor="men">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'men' } }"
          ><img class="img" src="../assets/men.svg" alt=""
        /></router-link>
      </div>
    </section>

    <!---kids clothes-->
    <section class="section d-block" data-anchor="kids">
      <div class="container">
        <router-link :to="{ name: 'ListView', params: { category: 'kids' } }"
          ><img class="img" src="../assets/kids.svg" alt=""
        /></router-link>
      </div>
    </section>

    <!---sales-->
    <section class="section d-block" data-anchor="sale">
      <div class="container">
        <a class="mylink" href="#">
          <router-link :to="{ name: 'ListView', params: { category: 'sale' } }"
            ><img class="img" src="../assets/sale.svg" alt=""
          /></router-link>
        </a>
      </div>
    </section>

    <!---contact us-->
    <section class="section d-block" data-anchor="contact">
      <div class="container-fluid text-left">
        <div class="row d-flex justify-content-center">
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
              <div class="text-center mt-2">
                <button class="btn btn-dark" type="submit">Send</button>
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
h6 {
  font-size: 0.5rem;
}
/* 


.hide {
  display: none;
}
{
  .navbar .nav-item {
    padding-right: 0px !important;
    font-size: 10px;
  }
  section img {
    float: right;

    min-height: 100%;
    height: 300px !important;
  }
  .section .container {
    padding: 0px !important;
  }
  .section .container-fluid {
    font-size: 10px;
  }
  .section .container-fluid .bi {
    font-size: 17px !important;
  }
} */
section img {
  height: 70vh;
}
.active a {
  color: red !important;
}
/* .fp-table {
  display: block;
} */
@media only screen and (max-width: 768px) {
  section img {
    float: right;
  }
}
</style>
