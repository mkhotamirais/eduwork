import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Asynchronous from "./pages/q1/Asynchronous";
import Hook from "./pages/q2/Hook";
import HookThree from "./pages/q3/HookThree";
import Middleware from "./pages/q4/Middleware";
import Nosql from "./pages/q5/Nosql";
import RelasiSql from "./pages/q6/RelasiSql";
import Axios from "./pages/q7/Axios";
import Casl from "./pages/q8/Casl";
import DataExchange from "./pages/q9/DataExchange";
import FlexGridCondition from "./pages/q10/FlexGridCondition";
import ReqRes from "./pages/q11/ReqRes";
import OpsiSelainExpress from "./pages/q12/OpsiSelainExpress";
import ClientServer from "./pages/q13/ClientServer";
import Spa from "./pages/q14/Spa";
import FungsiRedux from "./pages/q15/FungsiRedux";
import Auth2 from "./pages/q16/Auth2";
import LibraryAuthorization from "./pages/q17/LibraryAuthorization";
import ErrorStatus from "./pages/q18/ErrorStatus";
import ExpressAuthLibrary from "./pages/q20/ExpressAuthLibrary";
import Localstorage from "./pages/q19/Localstorage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="asynchronous" element={<Asynchronous />} />
        <Route path="hook" element={<Hook />} />
        <Route path="hookThree" element={<HookThree />} />
        <Route path="middleware" element={<Middleware />} />
        <Route path="nosql" element={<Nosql />} />
        <Route path="relasiSql" element={<RelasiSql />} />
        <Route path="axios" element={<Axios />} />
        <Route path="casl" element={<Casl />} />
        <Route path="dataExchange" element={<DataExchange />} />
        <Route path="flexGridCondition" element={<FlexGridCondition />} />
        <Route path="reqRes" element={<ReqRes />} />
        <Route path="opsiSelainExpress" element={<OpsiSelainExpress />} />
        <Route path="clientServer" element={<ClientServer />} />
        <Route path="spa" element={<Spa />} />
        <Route path="fungsiRedux" element={<FungsiRedux />} />
        <Route path="auth2" element={<Auth2 />} />
        <Route path="libraryAuthorization" element={<LibraryAuthorization />} />
        <Route path="errorStatus" element={<ErrorStatus />} />
        <Route path="localstorage" element={<Localstorage />} />
        <Route path="expressUploadLibrary" element={<ExpressAuthLibrary />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
