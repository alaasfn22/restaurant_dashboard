import {Outlet} from "react-router-dom";
import SideBar from "../organisms/SideBar";
import DarkBtn from "../atoms/DarkBtn";
const DashLayout = () => {
  return (
    <div className="flex relative w-full min-h-screen bg-whiteLight dark:bg-dark overflow-hidden ">
      <SideBar />
      <div className=" w-full lg:pl-56 rtl:lg:pr-56 rtl:lg:pl-0  ">
        <Outlet></Outlet>
      </div>
      <DarkBtn />
    </div>
  );
};

export default DashLayout;
