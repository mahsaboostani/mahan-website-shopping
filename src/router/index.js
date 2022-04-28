import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import ProductCard from "../views/ProductCard.vue";
import Dashboard from "../views/Dashboard.vue";
import Address from "../views/Address.vue";
import Account from "../views/Account.vue";
import Basket from "../views/Basket.vue";
import Payment from "../views/Payment.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category",
    name: "ListView",
    component: ListView,
    props: true,
  },
  {
    path: "/product/:category/:id",
    name: "ProductCard",
    component: ProductCard,
    props: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/dashboard/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/dashboard/address",
    name: "Address",
    component: Address,
  },
  {
    path: "/dashboard/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/product/payment",
    name: "Payment",
    component: Payment,
  },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
