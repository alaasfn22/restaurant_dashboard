import {Navigate, Outlet} from "react-router-dom";
const AuthProtected = () => {
  const token = false;
  return <div>{token ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default AuthProtected;
