import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./reducers/ui";
import {logger} from 'redux-logger'
import { authSlice } from "./reducers/auth";

const store = configureStore({
   reducer:{
    auth:authSlice.reducer,
    ui:uiSlice.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;