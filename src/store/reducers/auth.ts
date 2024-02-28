import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    authentication?: any
}

const storedAuthentication = localStorage.getItem("authentication");

const initialState: AuthState = {
    authentication: storedAuthentication ? JSON.parse(storedAuthentication) : null,
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthentication: (state: any, { payload }: any) => {
            console.log("🚀 ~ payload:", payload)
            state.authentication = payload;
            localStorage.setItem("authentication", JSON.stringify(payload));
        }
    }
});

export const { setAuthentication } = authSlice.actions;
