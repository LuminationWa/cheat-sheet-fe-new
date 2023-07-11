import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCheatsheets: [],
    editMode: false,
    error: null,
};

export const cheatsheetsSlice = createSlice({
    name: "cheatsheets",
    initialState,
    reducers: {
        saveCheatsheets: (state, action) => {
            state.userCheatsheets = action.payload;
        },
        editOn: (state) => {
            state.editMode = true;
        },
        editOff: (state) => {
            state.editMode = false;
        }
    },
});

export const { saveCheatsheets, editOn, editOff } = cheatsheetsSlice.actions;
export default cheatsheetsSlice.reducer;
