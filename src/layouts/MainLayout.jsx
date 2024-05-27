import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="bg-gradient-to-r from-amber-200 via-lime-100 to-orange-300">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default MainLayout;