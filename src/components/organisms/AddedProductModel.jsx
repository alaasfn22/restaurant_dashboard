/* eslint-disable react/prop-types */
import {useContextAPi} from "../../utils/ContextApi";
import CustomeButton from "../atoms/CustomeButton";
import CustomeInputs from "../atoms/CustomeInputs";
import {Link} from "react-router-dom";

const AddedProductModel = () => {
  const {t} = useContextAPi();
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
          <div className="relative overflow-y-auto p-8 sm:px-12 flex-auto max-h-[400px]">
            <form className=" w-full flex flex-col gap-4">
              <CustomeInputs
                type="text"
                name={t("product name")}
                placeholder={t("product name")}
                id="name"
                autoComplete
                required
                t={t}
              />
              <CustomeInputs
                type="number"
                name={t("product price")}
                placeholder={t("product price")}
                id="price"
                autoComplete
                required
                t={t}
              />
              <CustomeInputs
                type="number"
                name={t("product quantity")}
                placeholder={t("product quantity")}
                id="quantity"
                autoComplete
                required
                t={t}
              />
            </form>
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

export default AddedProductModel;
