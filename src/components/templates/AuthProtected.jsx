import Cookies from "js-cookie";
import {Navigate, Outlet} from "react-router-dom";
const AuthProtected = () => {
  const token = Cookies.get("token");
  return <div>{token ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default AuthProtected;
