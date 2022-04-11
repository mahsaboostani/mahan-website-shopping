<template>
  <!--logo-->
  <div class="container-fluid pt-3 mb-4">
    <div class="row mb-4">
      <div class="col-md"></div>
      <div class="col-md-6 align-items-center justify-content-right">
        <img class="pb-5" src="../assets/logo.svg" />
      </div>
      <div class="col-md mr-5">
        <ul class="d-flex flex-row justify-content-end p-2 list-unstyled p-4">
          <li class="pr-3">
            <img src="../assets/search.svg" alt="" />
          </li>
          <li class="pr-3">
            <img src="../assets/User.svg" alt="" />
          </li>
          <li class="pr-3">
            <img src="../assets/Help.svg" alt="" />
          </li>
          <li class="pr-3">
            <img src="../assets/Shopping-Bag.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!---navbar-->

  <nav class="navbar navbar-expand-lg fixed-bottom">
    <div
      v-on:scroll.passive="handleScroll"
      class="container align-items-center justify-content-center pb-5 pt-0"
    >
      <ul class="navbar-nav">
        <li class="nav-item pr-4">
          <a id="mahan-w" class="nav-link" href="#women">Mahan women</a>
        </li>
        <li class="nav-item pr-4">
          <a id="mahan-m" class="nav-link" href="#men">Mahan men</a>
        </li>
        <li class="nav-item pr-4">
          <a id="mahan-k" class="nav-link" href="#kids">Mahan kids</a>
        </li>
        <li class="nav-item pr-4">
          <a id="mahan-s" class="nav-link" href="#sale">Sales</a>
        </li>
      </ul>
    </div>
  </nav>

  <!---women clothes-->
  <div class="container pb-5 mb-5">
    <div class="pb-5 mb-5" id="women">
      <img class="img-fluid pb-5 mb-5" src="../assets/women.svg" alt="" />
    </div>
  </div>

  <!---men clothes-->
  <div class="container pb-5 mb-5">
    <div class="pb-5 mb-5" id="men">
      <img class="img-fluid pb-5 mb-5" src="../assets/men.svg" alt="" />
    </div>
  </div>

  <!---kids clothes-->
  <div class="container pb-5 mb-5">
    <div class="pb-5 mb-5" id="kids">
      <img class="img-fluid pb-5 mb-5" src="../assets/kids.svg" alt="" />
    </div>
  </div>

  <!---sales-->
  <div class="container pb-5 mb-5">
    <div class="pb-5 mb-5" id="sale">
      <a class="mylink" href="#">
        <img class="img-fluid pb-5 mb-5" src="../assets/sale.svg" alt="" />
      </a>
    </div>
  </div>

  <!---line-->

  <div class="container">
    <div>
      <img class="img-fluid pb-5" src="../assets/Line.svg" alt="" />
    </div>
  </div>

  <!---contact us-->
  <div class="container pb-5 text-left">
    <div class="row">
      <div class="col-md">
        <h3>About us</h3>
        <p class="font-weight-bold">Our story</p>
      </div>
      <div class="col-md"></div>
      <div class="col-md text-left">
        <h3>Contact us</h3>

        <p>
          <span class="font-weight-bold">Email:</span> eng.m.boostani@gmail.com
        </p>
        <p><span class="font-weight-bold">Tel:</span> 0785566443</p>
        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
      </div>
    </div>
  </div>

  <!---footer-->

  <footer class="p-5 text-center bg-dark text-white position-relative">
    <div class="container">
      <p class="lead">Copyright &copy; 2022 Mahan</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      scrollPosition: 0,
      isShowNavigation: false,
    };
  },

  methods: {
    handleScroll() {
      let women = document.getElementById("women");
      let womenH = window.getComputedStyle(women).height;
      let menH = parseInt(womenH) * 2;
      let kidsH = parseInt(womenH) * 3;
      let saleH = parseInt(womenH) * 4;
      let scrol = parseInt(window.scrollY + 300);
      console.log("women:", womenH);
      console.log(scrol);
      console.log();
      if (scrol <= parseInt(womenH)) {
        document.getElementById("mahan-w").style.color = "#E93030";
        document.getElementById("mahan-m").style.color = "#000000";
        document.getElementById("mahan-k").style.color = "#000000";
        document.getElementById("mahan-s").style.color = "#000000";
      } else if (scrol > parseInt(womenH) && scrol <= parseInt(menH)) {
        document.getElementById("mahan-w").style.color = "#000000";
        document.getElementById("mahan-m").style.color = "#E93030";
        document.getElementById("mahan-k").style.color = "#000000";
        document.getElementById("mahan-s").style.color = "#000000";
        console.log("yay");
      } else if (scrol > parseInt(menH) && scrol <= parseInt(kidsH)) {
        document.getElementById("mahan-w").style.color = "#000000";
        document.getElementById("mahan-m").style.color = "#000000";
        document.getElementById("mahan-k").style.color = "#E93030";
        document.getElementById("mahan-s").style.color = "#000000";
      } else if (scrol > parseInt(kidsH) && scrol <= parseInt(saleH)) {
        document.getElementById("mahan-w").style.color = "#000000";
        document.getElementById("mahan-m").style.color = "#000000";
        document.getElementById("mahan-k").style.color = "#000000";
        document.getElementById("mahan-s").style.color = "#E93030";
      }

      console.log("calling handleScroll");

      console.log("men:", menH);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    //document.addEventListener("scroll", this.scrollPosition);
    // document
    //   .getElementsByClassName("navbar-nav")
    //   .children[1].stylesetProperty("color", "#FFFFFF", "important");
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
/* .change_color {
  background-color: red;
}
.container #men:visited {
  background-color: black;
  align-items: flex-end;
  transform: translateY(30px);
}
a {
  background-color: blue;
}
a:visited {
  background-color: rgb(212, 19, 19);
  margin: 100px;
}
.changeColor {
  color: blue;
} */
.nam {
  color: rgb(44, 62, 80);
}
</style>
