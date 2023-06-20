import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: false,
  userToken: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/log-in", { username, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userInfo", JSON.stringify(response.data.payload));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // Update state with login data
      state.userToken = action.payload.token; // Update 'userToken' instead of 'token'
      state.userInfo = action.payload.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      // Update state with error
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const authActions = {
  ...authSlice.actions,
  login,
};
export default authSlice.reducer;
