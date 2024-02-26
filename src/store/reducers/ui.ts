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
    darkMode: boolean,
    layoutBoxed: boolean,
    layoutFixed: boolean,
    menuItemFlat: boolean;
    menuChildIndent: boolean;
}

const initialState: UiState = {
    screenSize: calculateWindowSize(window.innerWidth),
    navbarVariant: 'navbar-light',
    headerBorder: false,
    menuSideBarCollapsed: false,
    sidebarSkin: 'sidebar-dark-primary',
    footerFixed: false,
    headerFixed: false,
    darkMode: false,
    layoutBoxed: false,
    layoutFixed: false,
    menuItemFlat: false,
    menuChildIndent: false
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
        toggleLayoutBox(state) {
            state.layoutBoxed = !state.layoutBoxed;
            if (state.layoutBoxed) {
                addWindowClass('layout-boxed');
            } else {
                removeWindowClass('layout-boxed')
            }
        },
        toggleHeaderBorder(state) {
            state.headerBorder = !state.headerBorder
        },
        toggleLayoutFixed(state) {
            state.layoutFixed = !state.layoutFixed;
            if (state.layoutFixed) {
                removeWindowClass('layout-fixed')
            } else {
                addWindowClass('layout-fixed')
            }
        },
        toggleMenuItemFlat: (state) => {
            state.menuItemFlat = !state.menuItemFlat;
        },
        toggleMenuChildIndent: (state) => {
            state.menuChildIndent = !state.menuChildIndent;
        },
        setNavbarVariant: (state, { payload }) => {
            if (state.darkMode) {
                state.navbarVariant = payload || NAVBAR_DARK_VARIANTS[0].value;
            } else {
                state.navbarVariant = payload || NAVBAR_LIGHT_VARIANTS[0].value;
            }
        },
        setSidebarSkin: (state, { payload }) => {
            if (state.darkMode) {
                state.sidebarSkin = payload || SIDEBAR_DARK_SKINS[0].value;
            } else {
                state.sidebarSkin = payload || SIDEBAR_LIGHT_SKINS[0].value;
            }
        },

    }
});

export const {
    setWindowSize,
    toggleSideBarMenu,
    toggleFooterFixed,
    toggleHeaderFixed,
    toggleDarkMode,
    toggleLayoutBox,
    toggleHeaderBorder,
    toggleLayoutFixed,
    toggleMenuItemFlat,
    toggleMenuChildIndent,
    setNavbarVariant,
    setSidebarSkin
} = uiSlice.actions;


export default uiSlice.reducer;