import {Outlet} from "react-router-dom";
import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";
const NavLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <NavBar />
      <div className="py-8 flex-1 min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NavLayout;
