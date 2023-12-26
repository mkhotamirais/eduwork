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
import Admin from "./pages/admin/Admin";
import AdminLayout from "./layouts/AdminLayout";
import Category from "./pages/admin/category/Category";
import { fetchCategories } from "./features/categoriesSlice";
import Users from "./pages/users/Users";
import UsersLayout from "./layouts/UsersLayout";
import Cart from "./pages/cart/Cart";
import Order from "./pages/users/order/Order";
import Address from "./pages/users/address/Address";
import { fetchAddresses } from "./features/addressSlice";
import { fetchTags } from "./features/tagsSlice";
import ProductsAdmin from "./pages/admin/product/ProductsAdmin";
import TagsAdmin from "./pages/admin/tags/TagsAdmin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="category/:id?" element={<Category />} />
          <Route path="tags/:id?" element={<TagsAdmin />} />
          <Route path="productsAdmin" element={<ProductsAdmin />} />
        </Route>
        <Route path="cart">
          <Route index element={<Cart />} />
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
