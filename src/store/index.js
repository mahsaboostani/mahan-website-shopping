import { createStore } from "vuex";
function updateLocalStorage(cart, category) {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("category", JSON.stringify(category));
}
export default createStore({
  state: {
    cart: [],
    category: [],
    name: "",
    email: "",
    password: "",
    logged: false,
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
      updateLocalStorage(state.cart, state.category);
    },
    ADD_CATEGORY(state, category) {
      state.category.push(category);
      updateLocalStorage(state.cart, state.category);
    },
    REMOVE_FROM_CART(state, product) {
      let item = state.cart.find((i) => i.id === product.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
        updateLocalStorage(state.cart, state.category);
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
      const category = localStorage.getItem("category");
      if (category) {
        state.category = JSON.parse(category);
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
    LOGEIN(state) {
      state.logged = true;
    },
    LOGEOUT(state) {
      state.logged = false;
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("password");
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
    },
    addCategory({ commit }, category) {
      commit("ADD_CATEGORY", category);
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
    logIn({ commit }) {
      commit("LOGEIN");
    },
    logOut({ commit }) {
      commit("LOGEOUT");
    },
  },
  modules: {},
});
