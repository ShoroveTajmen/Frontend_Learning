import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div>This is navbar</div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;