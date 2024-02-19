import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../utils/fetchHooks/useGetData";
import {postDataWithToken} from "../../utils/fetchHooks/usePostData";
import {deleteData} from "../../utils/fetchHooks/useDeleteData";
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const response = await getData("/api/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      const response = await postDataWithToken("/api/products", product);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const response = await deleteData(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (search, thunkAPI) => {
    try {
      const response = await getData(`/api/products?search=${search}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  products: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action?.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
    //////////////
    [addProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action?.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
    ////////////////////////
    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action?.payload;
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
    //////////////////
    [searchProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [searchProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action?.payload;
    },
    [searchProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
  },
});

export default productsSlice.reducer;
