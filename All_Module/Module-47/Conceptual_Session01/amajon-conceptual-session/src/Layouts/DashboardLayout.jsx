import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex my-5">
           <div className="w-[20%] bg-red-200">
            <ul>
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/dashboard/profile'>Dashboard Profile</Link>
                </li>
                <li>
                    <Link to='/dashboard/editProfile'>Edit profile</Link>
                </li>
            </ul>

           </div>
          <div className="w-[80%]">
          <Outlet></Outlet>
          </div>
        </div>
    );
};

export default DashboardLayout;