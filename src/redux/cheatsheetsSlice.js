import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCheatsheets: [],
    error: null,
};

export const cheatsheetsSlice = createSlice({
    name: "cheatsheets",
    initialState,
    reducers: {
        saveCheatsheets: (state, action) => {
            state.userCheatsheets = action.payload;
        },
    },
});

export const { saveCheatsheets } = cheatsheetsSlice.actions;
export default cheatsheetsSlice.reducer;
