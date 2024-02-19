import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/fetchHooks/useGetData";
export const getAllRestaurants = createAsyncThunk(
  "restaurant/getAllRestaurants",
  async (_, thunkAPI) => {
    try {
      const response = await getData("/api/restaurants");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getRestaurantDetails = createAsyncThunk(
  "restaurant/getRestaurantDetails",
  async (id, thunkAPI) => {
    try {
      const response = await getData(`/api/restaurants/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  restaurants: [],
  restaurantDetails: [],
  isLoading: false,
  error: null,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  extraReducers: {
    [getAllRestaurants.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllRestaurants.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurants = action?.payload;
    },
    [getAllRestaurants.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
    /////////////////////
    [getRestaurantDetails.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRestaurantDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.restaurantDetails = action?.payload;
    },
    [getRestaurantDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
  },
});

export default restaurantSlice.reducer;
