/* eslint-disable no-unused-vars */

import RestuarantPage from "../templates/RestuarantPage";
import {Outlet} from "react-router-dom";

const Restaurant = () => {
  return (
    <div className="px-2 md:px-4">
      <RestuarantPage />
      <Outlet />
    </div>
  );
};

export default Restaurant;
