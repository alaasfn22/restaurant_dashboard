/* eslint-disable no-unused-vars */
import {useSearchParams} from "react-router-dom";
import {useContextAPi} from "../utils/ContextApi";
import {getRestaurantDetails} from "../store/slice/RestaurantSlice";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Restaurant_Details_Hook = () => {
  const {t} = useContextAPi();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantDetails(id));
  }, [id, dispatch]);

  const {restaurantDetails, isLoading} = useSelector(
    (state) => state.restaurants
  );

  const [data, setData] = useState(restaurantDetails?.data?.products);

  useEffect(() => {
    setData(restaurantDetails?.data?.products);
  }, [dispatch, restaurantDetails]);
  return [t, restaurantDetails, isLoading, data];
};

export default Restaurant_Details_Hook;
