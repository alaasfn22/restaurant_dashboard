/* eslint-disable react/prop-types */
import {useContextAPi} from "../../utils/ContextApi";
import CustomeButton from "../atoms/CustomeButton";
import CustomeInputs from "../atoms/CustomeInputs";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../store/slice/ProductsSlice";
import {useEffect, useState} from "react";
import {CustomeToast, customeContainer} from "../../utils/Toastify";

const AddedProductModel = () => {
  const {t} = useContextAPi();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const data = {
    name: inputValue.name,
    price: inputValue.price,
    quantity: inputValue.quantity,
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.name) {
      CustomeToast("warn", t("enter product name"));
      return;
    } else if (!inputValue.price) {
      CustomeToast("warn", t("enter product price"));
      return;
    } else if (!inputValue.quantity) {
      CustomeToast("warn", t("enter product quantity"));
      return;
    } else {
      await dispatch(addProduct(data));
    }

    setInputValue({
      name: "",
      price: "",
      quantity: "",
    });
  };

  const {products, isLoading, error} = useSelector((state) => state.products);

  useEffect(() => {
    if (isLoading === false) {
      if (products.message === "success added") {
        CustomeToast("success", t("product added successfully"));
      } else if (error) {
        CustomeToast("error", error.message);
      }
    }
  }, [isLoading]);

  return (
    <div className="flex justify-center items-center overflow-x-hidden p-4 bg-gray-900 bg-opacity-50 overflow-y-auto fixed inset-0 z-50 ">
      {customeContainer()}
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
                name={"name"}
                placeholder={t("product name")}
                id="name"
                value={inputValue.name}
                onChange={handleChange}
                autoComplete
                required
                t={t}
              />
              <CustomeInputs
                type="number"
                name={"price"}
                placeholder={t("product price")}
                id="price"
                value={inputValue.price}
                onChange={handleChange}
                autoComplete
                required
                t={t}
              />
              <CustomeInputs
                type="number"
                name={"quantity"}
                placeholder={t("product quantity")}
                id="quantity"
                value={inputValue.quantity}
                onChange={handleChange}
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
            <CustomeButton
              t={t}
              title={isLoading ? "loading..." : "save"}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedProductModel;
