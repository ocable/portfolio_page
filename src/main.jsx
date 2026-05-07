import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, useParams } from "react-router-dom";

function WorksRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/works/${slug}`} replace />
}

import RootV2 from "./v2/layout/RootV2.jsx";
import HomeV2 from "./v2/HomeV2.jsx";
import WorkDetailV2 from "./v2/pages/WorkDetailV2.jsx";
import BuildingPageV2 from "./v2/pages/BuildingPageV2.jsx";
import CodingPageV2 from "./v2/pages/CodingPageV2.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootV2 />,
    children: [
      { index: true, element: <HomeV2 /> },
      { path: "works/:slug", element: <WorkDetailV2 /> },
      { path: "building", element: <BuildingPageV2 /> },
      { path: "coding", element: <CodingPageV2 /> },
      // Legacy redirects
      { path: "v2", element: <Navigate to="/" replace /> },
      { path: "v2/building", element: <Navigate to="/building" replace /> },
      { path: "v2/coding", element: <Navigate to="/coding" replace /> },
      { path: "v2/works/:slug", element: <WorksRedirect /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
