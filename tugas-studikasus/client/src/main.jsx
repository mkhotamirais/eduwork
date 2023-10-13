import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Home from "./pages/Home.jsx";
import Product from "./pages/product/product.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Account from "./pages/account/Account.jsx";
import Profil from "./pages/account/accountComp/Profil.jsx";
import Pemesanan from "./pages/account/accountComp/Pemesanan.jsx";
import Alamat from "./pages/account/accountComp/Alamat.jsx";
import TambahAlamat from "./pages/account/accountComp/TambahAlamat.jsx";
import Keranjang from "./pages/keranjang/Keranjang.jsx";
import Checkout from "./pages/keranjang/Checkout.jsx";
import Invoices from "./pages/keranjang/Invoices.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
        <Route path="" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="account" element={<Account />}>
          <Route path="profil" element={<Profil />} />
          <Route path="pemesanan" element={<Pemesanan />} />
          <Route path="alamat" element={<Alamat />} />
          <Route path="tambah-alamat" element={<TambahAlamat />} />
        </Route>
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
