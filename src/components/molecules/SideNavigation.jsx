import {NavLink} from "react-router-dom";
import {linksData} from "../../utils/data";
import {useTranslation} from "react-i18next";
import Cookies from "js-cookie";

const SideNavigation = () => {
  const {t} = useTranslation();
  const logout = () => {
    Cookies.remove("token");
    window.location.reload("/login");
  };

  return (
    <ul className="flex flex-col gap-2 py-12  h-full relative">
      {linksData.map((link) => {
        return (
          <>
            <li
              key={link.id}
              className="last:absolute last:bottom-8 last:left-0 last:right-0 px-4"
            >
              <NavLink
                to={link.path}
                onClick={link.name === "logout" ? logout : null}
                className="flex flex-row  items-center   py-2 rounded-md
                         h-12 transform hover:translate-x-2 transition-all ease-in duration-200
                          text-gray-500 hover:text-gray-800 hover:bg-customeGray
                          dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-700
                          rtl:hover:-translate-x-2 
                         "
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-xl   ">
                  {link.icon}
                </span>
                <span className="text-md font-medium">{t(link.name)}</span>
              </NavLink>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SideNavigation;
