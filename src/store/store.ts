import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./reducers/ui";
import { authSlice } from "./reducers/auth";

const store = configureStore({
   reducer:{
    auth:authSlice.reducer,
    ui:uiSlice.reducer
   }});

export default store;