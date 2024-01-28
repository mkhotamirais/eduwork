import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import BasicComponents from "./pages/basicComponents/BasicComponents";
import StylingComponents from "./pages/stylingComponents/StylingComponents";
import PortfolioTask from "./pages/portfolio/PortfolioTask";
import FormValidation from "./pages/formValidation/FormValidation";
import LifecycleComponents from "./pages/lifecycleComponents/LifecycleComponents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="basicComponents" element={<BasicComponents />} />
      <Route path="stylingComponents" element={<StylingComponents />} />
      <Route path="portfolioTask" element={<PortfolioTask />} />
      <Route path="formValidation" element={<FormValidation />} />
      <Route path="lifecycleComponents" element={<LifecycleComponents />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
