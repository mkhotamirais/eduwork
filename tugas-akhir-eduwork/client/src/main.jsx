import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/products/Products";
import { Provider } from "react-redux";
import { store } from "./store";
import { fetchProducts } from "./features/productsSlice";
import { fetchCategories } from "./features/categoriesSlice";
import Users from "./pages/users/Users";
import UsersLayout from "./layouts/UsersLayout";
import Cart from "./pages/cart/Cart";
import Order from "./pages/users/order/Order";
import Address from "./pages/users/address/Address";
import { fetchAddresses } from "./features/addressSlice";
import { fetchTags } from "./features/tagsSlice";
import { fetchCarts, getCartQty } from "./features/cartSlice";
import PilihAlamat from "./pages/cart/PilihAlamat";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart">
          <Route index element={<Cart />} />
          <Route path="pilihAlamat" element={<PilihAlamat />} />
        </Route>
        <Route path="user" element={<UsersLayout />}>
          <Route index element={<Users />} />
          <Route path="order" element={<Order />} />
          <Route path="address/:id?" element={<Address />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());
store.dispatch(fetchAddresses());
store.dispatch(fetchTags());
store.dispatch(fetchCarts());
store.dispatch(getCartQty());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
