import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true,
            state.currentUser = action.payload;
        },
        logout: (state, _) => {
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    }
});

export const {login, logout} = userSlice.actions;