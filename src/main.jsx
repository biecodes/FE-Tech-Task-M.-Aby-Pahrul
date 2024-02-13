import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { UserManagement } from "./pages/UserManagement";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },

  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <NotFound />,
  },

  {
    path: "/aboutus",
    element: <AboutUs />,
    errorElement: <NotFound />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },

  {
    path: "/usermanagement",
    element: <UserManagement />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
