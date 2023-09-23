
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <h1 className="text-xl font-bold">Amajhon</h1>
        <nav>
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
