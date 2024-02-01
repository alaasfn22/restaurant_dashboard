import logo_dark from "../../assets/logo-dark-6dbab3e1.png";
import logo_light from "../../assets/logo-light-35c89c2c.png";
import {useContextAPi} from "../../utils/ContextApi";
const SideBarLogo = () => {
  const {theme} = useContextAPi();
  return (
    <div>
      {theme === "light" && (
        <img src={logo_dark} alt="logo" className="object-cover w-32   " />
      )}
      {theme === "dark" && (
        <img src={logo_light} alt="logo" className="object-cover w-32   " />
      )}
    </div>
  );
};

export default SideBarLogo;
