import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slice/AuthSlice";
import productsSlice from "./slice/ProductsSlice";
import restaurantSlice from "./slice/RestaurantSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    restaurants: restaurantSlice,
  },
});

export default store;
