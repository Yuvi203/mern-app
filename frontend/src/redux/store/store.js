import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";
import ResumeSlice from "../slices/ResumeSlice";


const store = configureStore({
    reducer:{
        auth:AuthSlice,
        resume:ResumeSlice
    }
})

export default store