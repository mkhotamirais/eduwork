import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ErrorBoundary from "./pages/ErrorBoundary.jsx";
import Product from "./pages/product/Product.jsx";
import Profil from "./pages/profil/Profil.jsx";
import MyProfil from "./pages/profil/profilComp/MyProfil.jsx";
import Alamat from "./pages/profil/profilComp/Alamat.jsx";
import Pemesanan from "./pages/profil/profilComp/Pemesanan.jsx";
import Keranjang from "./pages/keranjang/Keranjang.jsx";
import Checkout from "./pages/keranjang/Checkout.jsx";
import Invoice from "./pages/keranjang/Invoice.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
        <Route path="" element={<Product />} />
        <Route path="profil" element={<Profil />}>
          <Route path="" element={<MyProfil />} />
          <Route path="pemesanan" element={<Pemesanan />} />
          <Route path="alamat" element={<Alamat />} />
        </Route>
        <Route path="keranjang" element={<Keranjang />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
        <Route path="invoice" element={<Invoice />}></Route>
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
