import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveCheatsheets } from './cheatsheetsSlice';

export const fetchCheatsheets = createAsyncThunk(
    "fetchCheatsheets",
    async (userId, { rejectWithValue, dispatch }) => {
        try {
            // Post request
            const response = await fetch(`/cheatsheets?user=${userId}`);
            if (response.ok) {
                const data = await response.json();
                dispatch(saveCheatsheets(data)); //Updates state
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