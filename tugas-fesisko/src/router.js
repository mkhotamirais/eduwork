import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/products/Products.vue";
import Cart from "./views/cart/Cart.vue";
import User from "./views/user/User.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import NotFound from "./views/NotFound.vue";
import SingleProduct from "./views/products/SingleProduct.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: "", redirect: "/products" },
      { path: "products", component: Products },
      { path: "products/:id", component: SingleProduct },
      { path: "cart", component: Cart },
      { path: "user", component: User },
    ],
  },
  { path: "/login", component: Login },
  // 404
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
