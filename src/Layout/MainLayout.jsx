import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";


const MainLayout = () => {
   
    return (
        <div className="bg-[#DCF2CC]">
         <div className="w-full max-w-[1200px]  mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;