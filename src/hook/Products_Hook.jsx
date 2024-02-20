import {useEffect, useState} from "react";
import {getAllProducts} from "../store/slice/ProductsSlice";
import {useContextAPi} from "../utils/ContextApi";
import {useDispatch, useSelector} from "react-redux";

const Products_Hook = () => {
  const {t} = useContextAPi();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const {products, isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState(products?.data);

  useEffect(() => {
    setData(products?.data);
  }, [dispatch, products]);

  return [t, isLoading, data];
};

export default Products_Hook;
