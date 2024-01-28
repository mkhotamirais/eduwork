import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import MyRouter from "./pages/MyRouter.jsx";
import Child1Router from "./pages/ChildRouter/Child1Router";
import Child2Router from "./pages/ChildRouter/Child2Router";
import GrandChildRouter1 from "./pages/ChildRouter/GrandChildRouter/GrandChildRouter1";
import GrandChildRouter2 from "./pages/ChildRouter/GrandChildRouter/GrandChildRouter2";
import MyHookNews from "./pages/MyHookNews";
import MyRedux from "./pages/MyRedux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="myrouter" element={<MyRouter />}>
        <Route path="child1" element={<Child1Router />}>
          <Route path="grandchild1" element={<GrandChildRouter1 />} />
          <Route path="grandchild2" element={<GrandChildRouter2 />} />
        </Route>
        <Route path="child2" element={<Child2Router />} />
      </Route>
      <Route path="myhooknews" element={<MyHookNews />} />
      <Route path="myredux" element={<MyRedux />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
