import {useContextAPi} from "../../utils/ContextApi";
import {useNavigate} from "react-router-dom";
import {FiPhone} from "react-icons/fi";
import {MdOutlineMail} from "react-icons/md";
import {IoLocationOutline} from "react-icons/io5";
import resImg from "../../assets/2-95b90f07.png";

const ViewRestDetailsModal = () => {
  const {t} = useContextAPi();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center overflow-x-hidden p-4 bg-gray-900 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 ">
      <div className="relative w-full md:w-1/2 mx-auto ">
        <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark ">
          <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t dark:text-white ">
            <h3 className="text-2xl capitalize font=semibold">
              {t("add new product")}
            </h3>
            <button
              onClick={() => navigate(-1)}
              className="bg-transparent border-0 text-black float-right"
            >
              <span className="dark:text-white cursor-pointer h-6 w-6 text-xl inline-flex hover:text-red-400 dark:hover:text-red-400  items-center justify-center ">
                x
              </span>
            </button>
          </div>
          <div className="relative overflow-y-auto p-8 sm:px-12 flex-auto max-h-[420px]">
            <div className="relative p-4 py-6 rounded-lg border border-default-200 shadow">
              <img
                src={resImg}
                alt="restaurant image"
                className="h-14 w-14 mx-auto mb-2"
              />
              <h4 className="text-base uppercase font-medium text-center  line-clamp-1 text-gray-800 dark:text-white">
                Farmhouse Dish Heaven
              </h4>
              <h4 className="text-base font-medium text-center text-gray-800 dark:text-white mb-10">
                Gustavo Philips
              </h4>
              <div className="flex justify-around capitalize mb-4">
                <div className="text-center">
                  <h4 className="text-lg font-medium text-primary mb-2">12</h4>
                  <h5 className="text-sm text-gray-800 dark:text-white">
                    {t("total product")}
                  </h5>
                </div>
                <div className="border-s border-default-200" />
                <div className="text-center">
                  <h4 className="text-lg font-medium text-primary mb-2">
                    1.2k
                  </h4>
                  <h5 className="text-sm text-gray-800 dark:text-white">
                    {t("total sales")}
                  </h5>
                </div>
              </div>
              <div className="space-y-5 mb-2 text-gray-700 dark:text-white">
                <div className="flex justify-center gap-3 ">
                  <span className=" font-bold text-xl inline-flex justify-center  ">
                    <IoLocationOutline />
                  </span>
                  <p className="text-sm dark:text-white line-clamp-2 ">
                    2045 Scotch Line, Essa, Ontario
                  </p>
                </div>
                <div className="flex gap-3 justify-between flex-wrap">
                  <div className="flex gap-3">
                    <span className=" font-bold text-xl inline-flex justify-center  ">
                      <MdOutlineMail />
                    </span>
                    <p className="text-sm dark:text-white d">
                      alaaalireact@gmail.com
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className=" font-bold text-xl inline-flex justify-center  ">
                      <FiPhone />
                    </span>
                    <p className="text-sm dark:text-white d">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRestDetailsModal;
