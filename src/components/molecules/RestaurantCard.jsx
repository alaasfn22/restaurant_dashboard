/* eslint-disable react/prop-types */
import {IoLocationOutline} from "react-icons/io5";
import resImg from "../../assets/2-95b90f07.png";
import {MdOutlineMail} from "react-icons/md";
import {FiPhone} from "react-icons/fi";
import CustomeButton from "../atoms/CustomeButton";
const RestaurantCard = ({t}) => {
  return (
    <div>
      <div className="relative p-4 py-6 rounded-lg border border-default-200 shadow">
        <img
          src={resImg}
          alt="restaurant image"
          className="h-14 w-14 mx-auto mb-4"
        />
        <h4 className="text-base uppercase font-medium text-center  line-clamp-1 text-gray-800 dark:text-white">
          Farmhouse Dish Heaven
        </h4>
        <h4 className="text-base font-medium text-center text-gray-800 dark:text-white mb-10">
          Gustavo Philips
        </h4>
        <div className="flex justify-around capitalize mb-8">
          <div className="text-center">
            <h4 className="text-lg font-medium text-primary mb-2.5">12</h4>
            <h5 className="text-sm text-gray-800 dark:text-white">
              {t("total product")}
            </h5>
          </div>
          <div className="border-s border-default-200" />
          <div className="text-center">
            <h4 className="text-lg font-medium text-primary mb-2.5">1.2k</h4>
            <h5 className="text-sm text-gray-800 dark:text-white">
              {t("total sales")}
            </h5>
          </div>
        </div>
        <div className="space-y-5 mb-6 text-gray-700 dark:text-white">
          <div className="flex gap-3 ">
            <span className=" font-bold text-xl inline-flex justify-center  ">
              <IoLocationOutline />
            </span>
            <p className="text-sm dark:text-white line-clamp-1 ">
              2045 Scotch Line, Essa, Ontario
            </p>
          </div>
          <div className="flex gap-3">
            <span className=" font-bold text-xl inline-flex justify-center  ">
              <MdOutlineMail />
            </span>
            <p className="text-sm dark:text-white d">alaaalireact@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <span className=" font-bold text-xl inline-flex justify-center  ">
              <FiPhone />
            </span>
            <p className="text-sm dark:text-white d">(123) 456-7890</p>
          </div>
        </div>
        <CustomeButton t={t} title="view details" />
      </div>
    </div>
  );
};

export default RestaurantCard;
