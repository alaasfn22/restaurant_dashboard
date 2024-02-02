import {useContextAPi} from "../../utils/ContextApi";
import SideBarLogo from "../atoms/SideBarLogo";
import SideNavigation from "../molecules/SideNavigation";

const SideBar = () => {
  const {open, setOpen} = useContextAPi();

  return (
    <>
      <div className=" hidden  lg:block lg:fixed lg:top-0 ltr::lg:left-0 rtl:lg:right-0 z-50 h-full  ">
        <div className="flex flex-col w-56 h-full overflow-auto bg-white dark:bg-dark border-r rtl:border-l rtl:border-r-0">
          <div className="flex items-center border-b border-dashed justify-center py-[16.5px] text-gray-800 dark:text-white ">
            <SideBarLogo />
          </div>
          <SideNavigation />
        </div>
      </div>

      {/* mobile */}
      <div
        className={` ${
          open ? "translate-x-0  " : "-translate-x-full rtl:translate-x-full  "
        } fixed top-0 left-0  rtl:right-0 transition-transform ease-linear duration-300 z-50 lg:hidden  w-full`}
      >
        <div className="flex w-full h-screen ">
          <div className="flex flex-col w-56 h-full overflow-auto bg-whiteLight dark:bg-dark border-r rtl:border-l rtl:border-r-0">
            <div className="flex items-center border-b border-dashed justify-center py-[16.5px] text-gray-800 dark:text-white ">
              <SideBarLogo />
            </div>
            <SideNavigation />
          </div>
          <div
            className="flex-1 bg-gray-900 bg-opacity-50"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
