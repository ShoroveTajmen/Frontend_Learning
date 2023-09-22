import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <div>This is my first home route</div>
  },
  {
    path: '/products',
    element: <div>Products route hitted</div>
  },
  {
    path: '/about',
    element: <div>about route hitted</div>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
