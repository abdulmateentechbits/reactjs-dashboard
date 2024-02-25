import { createSlice } from "@reduxjs/toolkit"
import { addWindowClass, calculateWindowSize } from "../../utils/helpers"

export interface UiState {
    screenSize: string
    navbarVariant: string
    headerBorder: boolean
    menuSideBarCollapsed: boolean,
    sidebarSkin: string
    footerFixed: boolean
    headerFixed: boolean
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth),
    navbarVariant: 'navbar-light',
    headerBorder: false,
    menuSideBarCollapsed: false,
    sidebarSkin: 'sidebar-dark-primary',
    footerFixed: false,
    headerFixed: false
}

addWindowClass("layout-footer-fixed");

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSideBarMenu: (state) => {
            state.menuSideBarCollapsed = !state.menuSideBarCollapsed
        },
        setWindowSize(state, { payload }) {
            state.screenSize = payload
        },
        toggleFooterFixed(state) {
            state.footerFixed = !state.footerFixed;
            if (state.footerFixed) {
                addWindowClass("layout-footer-fixed")
            } else {
                addWindowClass("layout-footer-fixed")
            }
        },
        toggleHeaderFixed(state) {
            state.headerFixed = !state.headerFixed;
            if (state.headerFixed) {
                addWindowClass("layout-navbar-fixed")
            } else {
                addWindowClass("layout-navbar-fixed")
            }
        }
    }
});

export const {
    setWindowSize,
    toggleSideBarMenu
} = uiSlice.actions;


export default uiSlice.reducer;