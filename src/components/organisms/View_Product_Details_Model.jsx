/* eslint-disable no-unused-vars */
import {Link, useSearchParams} from "react-router-dom";
import CustomeButton from "../atoms/CustomeButton";
import {useContextAPi} from "../../utils/ContextApi";
import ProductDetailsCard from "../molecules/ProductDetailsCard";

const ViewProductDetailsModel = () => {
  const {t} = useContextAPi();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="flex justify-center items-center overflow-x-hidden p-4 bg-gray-900 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 ">
      <div className="relative w-full md:w-1/2 mx-auto ">
        <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark ">
          <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t dark:text-white ">
            <h3 className="text-2xl capitalize font=semibold">
              {t("add new product")}
            </h3>
            <button className="bg-transparent border-0 text-black float-right">
              <Link
                to="/products"
                className="dark:text-white cursor-pointer h-6 w-6 text-xl inline-flex hover:text-red-400 dark:hover:text-red-400  items-center justify-center "
              >
                x
              </Link>
            </button>
          </div>
          <div className="relative overflow-y-auto p-8 sm:px-12 flex-auto max-h-[420px]">
            {/* <p>{searchParams.get("name")}</p>
            <p>{searchParams.get("qty")}</p>
            <p>{searchParams.get("price")}</p>
            <img src={searchParams.get("img")} alt="" /> */}
            <ProductDetailsCard
              t={t}
              name={searchParams.get("name")}
              img={searchParams.get("img")}
              price={searchParams.get("price")}
              qty={searchParams.get("qty")}
              type={searchParams.get("type")}
            />
          </div>
          <div className="flex items-center justify-center p-8 sm:px-12 w-full sm:w-1/2  gap-4 ">
            <CustomeButton
              t={t}
              title="cancel"
              style={{
                background: "#ddd",
                color: "black",
              }}
              path="/products"
            />
            <CustomeButton t={t} title="save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetailsModel;
