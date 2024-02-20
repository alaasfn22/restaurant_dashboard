import {useEffect, useState} from "react";
import {addProduct, getAllProducts} from "../store/slice/ProductsSlice";
import {CustomeToast} from "../utils/Toastify";
import {useContextAPi} from "../utils/ContextApi";
import {useDispatch, useSelector} from "react-redux";

const Add_Product_Hook = () => {
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
      dispatch(getAllProducts());
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
  return [inputValue, handleChange, handleSubmit, isLoading, t];
};

export default Add_Product_Hook;
