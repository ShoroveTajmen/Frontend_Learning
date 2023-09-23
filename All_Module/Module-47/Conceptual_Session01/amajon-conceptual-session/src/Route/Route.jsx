import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";

const myCreatedRoute = createBrowserRouter([

    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: ()=> fetch(`https://dummyjson.com/products`)
        },
        {
          path: '/dashboard',
          element: <div>thisis dashboard</div>
        },
      ]
    }
  ])

export default myCreatedRoute;