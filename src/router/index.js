import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../views/home/home.vue");
const category = () => import("../views/category/category.vue");
const shopcar = () => import("../views/shopcar/shopcar.vue");
const profile = () => import("../views/profile/profile.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/category",
    component: category
  },
  {
    path: "/shopcar",
    component: shopcar
  },
  {
    path: "/profile",
    component: profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
