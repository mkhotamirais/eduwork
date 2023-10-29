import { createRouter, createWebHistory } from "vue-router";
import Products from "./views/Products.vue";
import Cart from "./views/Cart.vue";
import User from "./views/User.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", component: Products },
  { path: "/cart", component: Cart },
  { path: "/user", component: User },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
