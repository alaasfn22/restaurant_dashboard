import {useEffect} from "react";
import {getAllRestaurants} from "../store/slice/RestaurantSlice";
import {useContextAPi} from "../utils/ContextApi";
import {useDispatch, useSelector} from "react-redux";

const Restaurants_Hook = () => {
  const {t} = useContextAPi();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRestaurants());
  }, [dispatch]);

  const {restaurants, isLoading} = useSelector((state) => state.restaurants);
  return [t, restaurants, isLoading];
};

export default Restaurants_Hook;
