<template>
  <!--logo-->
  <div class="container-fluid pt-2">
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-6 align-items-center justify-content-right">
        <img class="pb-2" src="./assets/logo.svg" />
      </div>
      <div class="col-md mr-5">
        <ul class="d-flex justify-content-end list-unstyled align-items-center">
          <li class="m-2">
            <router-link :to="{ name: 'Search' }"
              ><i class="bi bi-search text-dark" style="font-size: 25px"></i
            ></router-link>
          </li>
          <li>
            <CButton
              color="primary"
              @click="
                () => {
                  activeForm.showForm = true;
                }
              "
            >
              <i
                v-if="!logged"
                class="bi bi-person text-dark"
                style="font-size: 30px"
              ></i
            ></CButton>
            <CModal
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
              <CDropdownToggle :caret="false" variant="ghost">
                <i
                  v-if="logged"
                  class="bi bi-person-check text-dark"
                  style="font-size: 30px"
                ></i
              ></CDropdownToggle>
              <CDropdownMenu>
                <Registration :activeLogged="showDropDownLog" />
              </CDropdownMenu>
            </CDropdown>
          </li>
          <li>
            <CDropdown color="secondary">
              <CDropdownToggle :caret="false">
                <a class="badge text-dark" :value="cart.length" href="#">
                  <i
                    @click="viewDropDown"
                    class="bi bi-cart3 text-dark"
                    style="font-size: 27px"
                  ></i></a
              ></CDropdownToggle>
              <CDropdownMenu>
                <MiniCart :active="activeCart.showDropDown" />
              </CDropdownMenu>
            </CDropdown>
          </li>
          <li>
            <router-link :to="{ name: 'home' }">
              <a href="#">
                <i
                  class="bi bi-house-door text-dark"
                  style="font-size: 27px"
                ></i> </a
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
.btn-group {
  width: 45px;
}
.btn-group .btn {
  padding-left: 0px;
  padding-right: 0px;
  border: 0px;
}
// @media only screen and (max-width: 768px) {
//   img {
//     width: 300px;
//     height: 150px;
//   }
//   .col-md ul {
//     display: flex;
//     flex-direction: row;
//     justify-content: center !important;
//     margin-right: 0px !important;
//   }
// }
</style>
