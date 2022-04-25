<template>
  <!--logo-->
  <div class="container-fluid pt-2">
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-6 align-items-center justify-content-right">
        <img class="pb-2" src="./assets/logo.svg" />
      </div>
      <div class="col-md mr-5">
        <ul class="d-flex flex-row justify-content-end p-2 list-unstyled p-4">
          <li class="pr-3">
            <i class="bi bi-search text-dark" style="font-size: 27px"></i>
          </li>
          <li class="pr-3">
            <LoginForm
              :active="activeForm.showForm"
              @close-modal-event="hideModal"
              @logIn="enterProfile"
            /><a href="#">
              <i
                v-if="!logged"
                @click="showModal"
                class="bi bi-person text-dark"
                style="font-size: 27px"
              ></i>
            </a>
            <CDropdown color="secondary">
              <CDropdownToggle :caret="false">
                <a href="#"
                  ><i
                    v-if="logged"
                    @click="viewDropDownLogged"
                    class="bi bi-person-check text-dark"
                    style="font-size: 27px"
                  ></i></a
              ></CDropdownToggle>
              <CDropdownMenu @click.prevent>
                <Registration :activeLogged="showDropDownLog" />
              </CDropdownMenu>
            </CDropdown>
          </li>
          <!-- <li class="pr-3">
            <a class="badge text-dark" :value="cart.length" href="#"
              ><MiniCart :active="activeCart.showDropDown" />
              <i
                @click="viewDropDown"
                class="bi bi-cart3 text-dark"
                style="font-size: 27px"
              ></i
            ></a>
          </li> -->
          <li>
            <CDropdown color="secondary">
              <CDropdownToggle :caret="false">
                <a class="badge text-dark" :value="cart.length" href="#">
                  <i
                    @click.prevent="viewDropDown"
                    class="bi bi-cart3 text-dark"
                    style="font-size: 27px"
                  ></i></a
              ></CDropdownToggle>
              <CDropdownMenu @click.prevent>
                <MiniCart :active="activeCart.showDropDown" />
              </CDropdownMenu>
            </CDropdown>
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
} from "@coreui/bootstrap-vue";
export default {
  data() {
    return {
      activeCart: { showDropDown: false },
      activeForm: { showForm: false },
      showDropDownLog: false,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
