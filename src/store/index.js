import { createStore } from "vuex";
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export default createStore({
  state: {
    cart: [],
    name: "",
    email: "",
    password: "",
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);
      if (item) return item.quantity;
      else return null;
    },
    cartTotal: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      updateLocalStorage(state.cart);
    },
    REMOVE_FROM_CART(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
        updateLocalStorage(state.cart);
      }
    },
    REMOVE_PRODUCT(state, product) {
      state.cart = state.cart.filter((i) => i.id !== product.id);
    },
    UPDATE_CART_FROM_LOCALSTORAGE(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
    ADD_NAME(state, profileName) {
      state.name = profileName;
      localStorage.setItem("name", JSON.stringify(state.name));
    },
    ADD_EMAIL(state, profileEmail) {
      state.email = profileEmail;
      localStorage.setItem("email", JSON.stringify(state.email));
    },
    ADD_PASSWORD(state, profilepassword) {
      state.password = profilepassword;
      localStorage.setItem("password", JSON.stringify(state.password));
    },
    UPDATE_PROFILE_FROM_LOCALSTORAGE(state) {
      const name = localStorage.getItem("name");
      if (name) {
        state.name = JSON.parse(name);
      }
      const email = localStorage.getItem("email");
      if (email) {
        state.email = JSON.parse(email);
      }
      const password = localStorage.getItem("password");
      if (password) {
        state.password = JSON.parse(password);
      }
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    removeFromCart({ commit }, product) {
      commit("REMOVE_FROM_CART", product);
    },
    updateCartFromLocalStorage({ commit }) {
      commit("UPDATE_CART_FROM_LOCALSTORAGE");
    },
    removeProduct({ commit }, product) {
      commit("REMOVE_PRODUCT", product);
    },
    addName({ commit }, profileName) {
      commit("ADD_NAME", profileName);
    },
    addEmail({ commit }, profileEmail) {
      commit("ADD_EMAIL", profileEmail);
    },
    addPassword({ commit }, profilepassword) {
      commit("ADD_PASSWORD", profilepassword);
    },
    updateProfileFromLocalStorage({ commit }) {
      commit("UPDATE_PROFILE_FROM_LOCALSTORAGE");
    },
  },
  modules: {},
});
