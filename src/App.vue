<template>
  <!--logo-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 w-100 justify-content-center">
        <img src="@/assets/logo.svg" alt="#" />
        <!-- <h1
          style="
            font-family: Megrim, cursive;
            font-weight: bold;
            font-size: 160px;
          "
        >
          mahan
        </h1> -->
      </div>
      <div class="col-md">
        <ul
          class="d-flex justify-content-center list-unstyled align-items-center m-3 justify-content-md-end"
        >
          <li class="p-1">
            <router-link :to="{ name: 'Search' }"
              ><i class="bi bi-search text-dark h4"></i
            ></router-link>
          </li>
          <li>
            <CButton
              class="p-1"
              color="primary"
              @click="
                () => {
                  activeForm.showForm = true;
                }
              "
            >
              <a href="#"
                ><i v-if="!logged" class="bi bi-person text-dark h3"></i></a
            ></CButton>
            <CModal
              class="w-100"
              :visible="activeForm.showForm"
              @close="
                () => {
                  activeForm.showForm = false;
                }
              "
            >
              <CModalBody>
                <LoginForm
                  :active="activeForm.showForm"
                  @close-modal-event="hideModal"
                  @logIn="enterProfile"
                />
              </CModalBody>
            </CModal>

            <CDropdown v-if="logged" color="secondary">
              <CDropdownToggle class="p-1" :caret="false" variant="ghost">
                <a href="#">
                  <i
                    v-if="logged"
                    class="bi bi-person-check text-dark h3"
                  ></i></a
              ></CDropdownToggle>
              <CDropdownMenu>
                <Registration :activeLogged="showDropDownLog" />
              </CDropdownMenu>
            </CDropdown>
          </li>
          <li>
            <CDropdown color="secondary">
              <CDropdownToggle class="p-1" :caret="false">
                <a class="badge p-0 text-dark" :value="cart.length" href="#">
                  <i
                    @click="viewDropDown"
                    class="bi bi-cart3 text-dark h4"
                  ></i></a
              ></CDropdownToggle>
              <CDropdownMenu>
                <MiniCart :active="activeCart.showDropDown" />
              </CDropdownMenu>
            </CDropdown>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">
              <a class="p-0" href="#">
                <i class="bi bi-house-door text-dark h4"></i> </a
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>
<script>
import MiniCart from "@/components/MiniCart.vue";
import LoginForm from "@/components/LoginForm.vue";
import Registration from "@/components/Registration.vue";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CModal,
  CModalBody,
} from "@coreui/bootstrap-vue";
export default {
  data() {
    return {
      activeCart: { showDropDown: false },
      activeForm: { showForm: false },
      showDropDownLog: false,
      visibleLiveDemo: false,
      name: "",
      email: "",
    };
  },
  components: {
    MiniCart,
    LoginForm,
    Registration,
    CDropdown,
    CDropdownToggle,
    CDropdownMenu,

    CModal,

    CModalBody,
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    logged() {
      return this.$store.state.logged;
    },
  },
  mounted() {
    this.$store.dispatch("updateCartFromLocalStorage");
    this.$store.dispatch("updateProfileFromLocalStorage");
    if (localStorage.name && localStorage.email && localStorage.password) {
      this.$store.dispatch("logIn");
    }
  },
  methods: {
    viewDropDown() {
      this.activeCart.showDropDown = !this.activeCart.showDropDown;
    },
    showModal() {
      this.activeForm.showForm = true;
      this.activeCart.showDropDown = false;
    },
    hideModal() {
      this.activeForm.showForm = false;
    },
    viewDropDownLogged() {
      this.showDropDownLog = !this.showDropDownLog;
    },
    enterProfile() {
      this.$store.dispatch("logIn");
    },
    showName(value) {
      this.name = value.name;
      this.email = value.email;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Libre Bodoni", serif;
  // font-family: "Playfair Display", serif;

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

.badge:after {
  content: attr(value);

  font-size: 12px;
  color: #fff;
  background: red;
  border-radius: 50%;
  padding: 0 5px;
  position: relative;
  left: -8px;
  top: -10px;
  opacity: 0.9;
}
// .btn-group {
//   width: 45px;
// }
// .btn-group .btn {
//   padding-left: 0px;
//   padding-right: 0px;
//   border: 0px;
// }
// @media only screen and (max-width: 768px) {
//   .container-fluid img {
//     width: 300px;
//     height: 150px;
//   }
//   .col-md ul {
//     display: flex;
//     flex-direction: row;
//     justify-content: center !important;
//     margin-right: 0px !important;
//   }
//   .col-md .bi {
//     font-size: 25px !important;
//   }
//   .dropdown-menu {
//     width: 200px;
//   }
//   .modal-dialog {
//     width: 300px !important;
//     height: 350px !important;
//   }
//   .modal-body {
//     padding: 0px !important;
//   }
// }
</style>
