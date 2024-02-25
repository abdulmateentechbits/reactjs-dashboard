import { createSlice } from "@reduxjs/toolkit"
import { addWindowClass, calculateWindowSize, removeWindowClass } from "../../utils/helpers"
import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from "../../utils/themes"

export interface UiState {
    screenSize: string
    navbarVariant: string
    headerBorder: boolean
    menuSideBarCollapsed: boolean,
    sidebarSkin: string
    footerFixed: boolean
    headerFixed: boolean
    darkMode:boolean
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth),
    navbarVariant: 'navbar-light',
    headerBorder: false,
    menuSideBarCollapsed: false,
    sidebarSkin: 'sidebar-dark-primary',
    footerFixed: false,
    headerFixed: false,
    darkMode:false
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
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            if (state.darkMode) {
              state.navbarVariant = NAVBAR_DARK_VARIANTS[0].value;
              state.sidebarSkin = SIDEBAR_DARK_SKINS[0].value;
            } else {
              state.navbarVariant = NAVBAR_LIGHT_VARIANTS[0].value;
              state.sidebarSkin = SIDEBAR_LIGHT_SKINS[0].value;
            }
            if (state.darkMode) {
              addWindowClass('dark-mode');
            } else {
              removeWindowClass('dark-mode');
            }
          },
    }
});

export const {
    setWindowSize,
    toggleSideBarMenu,
    toggleFooterFixed,
    toggleHeaderFixed,
    toggleDarkMode
} = uiSlice.actions;


export default uiSlice.reducer;