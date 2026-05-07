import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layout/Root.jsx";
import Home from "./Home.jsx";
import Van from "./pages/Van.jsx";
import Mobility from "./pages/Mobility.jsx";
import Basement from "./pages/Basement.jsx";
import Record from "./pages/Record.jsx";
import MiniBike from "./pages/MiniBike.jsx";
import Shower from "./pages/Shower.jsx";
import Project_List from "./pages/Project_list.jsx";
import RootV2 from "./v2/layout/RootV2.jsx";
import HomeV2 from "./v2/HomeV2.jsx";
import WorkDetailV2 from "./v2/pages/WorkDetailV2.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Project_List /> },
      { path: "/van", element: <Van /> },
      { path: "/mobility", element: <Mobility /> },
      { path: "/basement", element: <Basement /> },
      { path: "/record", element: <Record /> },
      { path: "/minibike", element: <MiniBike /> },
      { path: "/shower", element: <Shower /> },
    ],
  },
  {
    path: "/v2",
    element: <RootV2 />,
    children: [
      { index: true, element: <HomeV2 /> },
      { path: "works/:slug", element: <WorkDetailV2 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
