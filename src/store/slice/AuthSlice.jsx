import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postData} from "../../utils/fetchHooks/usePostData";

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await postData("/api/login", user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await postData("/api/sign_up", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const initialState = {
  user: [],
  addUser: [],
  isLoading: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action?.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
    //////////////////////////////
    [register.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.addUser = action?.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    },
  },
});

export default authSlice.reducer;
