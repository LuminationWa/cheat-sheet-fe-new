import { createAsyncThunk } from "@reduxjs/toolkit";
import { loggedIn } from './authSlice';

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue, dispatch }) => {
    try {
      // Post request
      const response = await fetch('/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.payload._id);
        localStorage.setItem("username", data.payload.username);
        dispatch(loggedIn()); //Updates state
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

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ username, password, email }, { rejectWithValue, dispatch }) => {
    try {
      // Post request
      const response = await fetch('/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      console.log(response);
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
)
