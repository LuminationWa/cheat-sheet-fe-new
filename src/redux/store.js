import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cheatsheetsReducer from "./cheatsheetsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cheatsheets: cheatsheetsReducer,
  },
});
