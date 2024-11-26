import { createSlice } from "@reduxjs/toolkit";
import database from "../../public/database.json"
import { setIsLoading } from "./loaderSlice";

export const userSlice = createSlice({
    name: "database",
    initialState: {
        Database: localStorage.getItem("database") || database,
        currentUser: null,
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            const {email, password} = action.payload;
            for (let i = 0; i < state.Database.length; i++) {
                if (state.Database[i].email === email && state.Database[i].password === password) {
                    state.isLoggedIn = true;
                    state.currentUser = state.Database[i];
                }
            }
            console.log("after completing search");
        }
    }
});

export const {login} = userSlice.actions;