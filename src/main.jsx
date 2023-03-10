import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BigClock from "./BigClock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "clock/:cityKey",
        element: <BigClock />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
