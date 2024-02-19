import CustomeIconStyle from "../atoms/CustomeIconStyle";
import {HiOutlineBellAlert} from "react-icons/hi2";
import SideBarLogo from "../atoms/SideBarLogo";
import {FaBarsStaggered} from "react-icons/fa6";
import {useContextAPi} from "../../utils/ContextApi";
import {CiSettings} from "react-icons/ci";

const NavBar = () => {
  const {setOpen, changeLangToArbic, changeLangToEnglish, language, t} =
    useContextAPi();
  // const user = JSON.parse(Cookies.get("user"));
  return (
    <nav className="py-4 border-b text-3xl border-solid bg-whiteLight dark:bg-dark border-gray-200 px-2 lg:px-4">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" flex  items-center justify-between lg:justify-end">
          <div className="lg:hidden flex items-center  gap-1">
            <span
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center  rounded-md text-gray-400  cursor-pointer "
            >
              <FaBarsStaggered />
            </span>
            <div className="flex flex-shrink-0 items-center">
              <SideBarLogo />
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <span className="hidden  sm:inline-flex items-center justify-center gap-4 ">
              <CustomeIconStyle icon={<CiSettings />} />
              <span className="inline-flex relative">
                <CustomeIconStyle icon={<HiOutlineBellAlert />} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-500 rounded-full animate-ping"></span>
                <span className="absolute -right-1 -top-1 h-4 w-4 text-center bg-yellow-500 text-xs font-medium text-white rounded-full">
                  5
                </span>
              </span>
            </span>
            <div className="flex items-center  gap-3">
              {language === "ar" ? (
                <span
                  onClick={() => changeLangToEnglish()}
                  className="inline-flex hover:text-primary font-semibold group text-gray-700 bg-customeGray cursor-pointer text-sm  dark:text-white dark:bg-gray-800 p-1 rounded-full w-8 h-8 items-center justify-center"
                >
                  En
                </span>
              ) : (
                <span
                  onClick={() => changeLangToArbic()}
                  className="inline-flex group  hover:text-primary font-semibold text-gray-700 bg-customeGray cursor-pointer text-sm  dark:text-white dark:bg-gray-800 p-1 rounded-full w-8 h-8  justify-center"
                >
                  ع
                </span>
              )}
              <span className=" cursor-pointer flex border rounded-full bg-gray-800 text-sm ">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="user menu"
                />
              </span>
              <divs className="capitalize">
                <h3 className="dark:text-gray-200 text-sm">alaa</h3>
                <h3 className="text-gray-400 text-sm capitalize">
                  {t("admin")}
                </h3>
              </divs>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
