import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/_globals.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Filmography from "./pages/Filmography/Filmography";
import Error from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/filmography",
    element: <Filmography />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
