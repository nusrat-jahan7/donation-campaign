import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Route from "./components/Route/Route";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import CategoryDetails from "./components/CategoryDetails/CategoryDetails";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/categories.json"),
      },
      {
        path: "/category-details/:id",
        element: <CategoryDetails />,
        loader: () => fetch("/categories.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
