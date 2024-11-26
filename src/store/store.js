import { configureStore } from "@reduxjs/toolkit";
import { toastSlice } from "./toastSlice";
import { loaderSlice } from "./loaderSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        toast: toastSlice.reducer,
        loader: loaderSlice.reducer,
        user: userSlice.reducer
    }
})