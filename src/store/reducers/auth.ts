import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    authentication?: any
}

const initialState: AuthState = {
    authentication: localStorage.getItem("authentication") || undefined,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthentication: (state: any, { payload }: any) => {
            state.authentication = payload
        }
    }
});

export const { setAuthentication } = authSlice.actions;
export default authSlice.reducer;
