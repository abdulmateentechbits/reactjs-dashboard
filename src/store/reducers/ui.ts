import { createSlice } from "@reduxjs/toolkit"
import { calculateWindowSize } from "../../utils/helpers"

export interface UiState {
    screenSize: string
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth)
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setWindowSize(state, { payload }) {
            state.screenSize = payload
        }
    }
});

export const {
    setWindowSize
} = uiSlice.actions;


export default uiSlice.reducer;