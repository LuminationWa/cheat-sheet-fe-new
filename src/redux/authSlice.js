import { createSlice } from "@reduxjs/toolkit";
import { login } from './authThunks';

const initialState = {
  loginStatus: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Modifies state based on action
    loggedIn: state => {
      state.loginStatus = true;
    },
    loggedOut: state => {
      state.loginStatus = false;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export const authActions = {
  ...authSlice.actions,
  login, // Import the login async thunk from authThunks.js
};

export default authSlice.reducer;