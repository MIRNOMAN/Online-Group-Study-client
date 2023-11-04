import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber/Navber";


const MainLayout = () => {
   
    return (
        <div>
         <div className="w-full max-w-[1200px] mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;