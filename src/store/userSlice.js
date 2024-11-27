import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isLoading: true,
        isLoggedIn: false
    },
    reducers: {
        isLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        login: (state, action) => {
            state.isLoggedIn = true,
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        logout: (state, _) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            state.isLoading = false;
        }
    }
});

export const {isLoading, login, logout} = userSlice.actions;