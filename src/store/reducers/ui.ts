import { createSlice } from "@reduxjs/toolkit"
import { calculateWindowSize } from "../../utils/helpers"

export interface UiState {
    screenSize: string
    navbarVariant:string
    headerBorder:boolean
    menuSideBarCollapsed:boolean
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth),
    navbarVariant:'navbar-light',
    headerBorder:false,
    menuSideBarCollapsed:false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSideBarMenu:(state)=>{
            state.menuSideBarCollapsed = !state.menuSideBarCollapsed
        },
        setWindowSize(state, { payload }) {
            state.screenSize = payload
        }
    }
});

export const {
    setWindowSize,
    toggleSideBarMenu
} = uiSlice.actions;


export default uiSlice.reducer;