import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login');
    const isSignup = location.pathname.includes('signup');
    
    return (
        <div>
            {(isLogin || isSignup) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(isLogin || isSignup) || <Footer></Footer>}
        </div>
    );
};

export default Main;