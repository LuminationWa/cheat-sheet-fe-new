import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userInfo: false,
  userToken: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      //Post request
      const response = await fetch('/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.payload));
        return data;
      } else {
        // Handle non-2xx HTTP status codes
        const errorData = await response.json();
        return rejectWithValue(errorData.message);
      }
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(login.fulfilled, (state, action) => {
  //     // Update state with login data when successful
  //     state.userToken = action.payload.token; // Update 'userToken' instead of 'token'
  //     state.userInfo = action.payload.payload;
  //     state.error = null;
  //   });
  //   builder.addCase(login.rejected, (state, action) => {
  //     // Update state with error
  //     state.error = action.payload;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const authActions = {
  ...authSlice.actions,
  login,
};
export default authSlice.reducer;
