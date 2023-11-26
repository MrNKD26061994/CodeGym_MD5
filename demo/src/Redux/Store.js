import blogsReducer from "./blogs/blogsSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
})