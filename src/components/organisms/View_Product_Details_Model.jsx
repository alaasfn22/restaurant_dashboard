/* eslint-disable no-unused-vars */
import {useNavigate, useSearchParams} from "react-router-dom";
import {useContextAPi} from "../../utils/ContextApi";
import ProductDetailsCard from "../molecules/ProductDetailsCard";

const ViewProductDetailsModel = () => {
  const {t} = useContextAPi();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

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
            <ProductDetailsCard
              t={t}
              name={searchParams.get("name")}
              img={searchParams.get("img")}
              price={searchParams.get("price")}
              qty={searchParams.get("qty")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetailsModel;
