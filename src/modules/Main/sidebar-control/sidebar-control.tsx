import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useScrollPosition from '../../../hook/useScrollPosition';
import styled from 'styled-components';
import { setNavbarVariant, setSidebarSkin, toggleDarkMode, toggleFooterFixed, toggleHeaderBorder, toggleHeaderFixed, toggleLayoutBox, toggleLayoutFixed, toggleMenuChildIndent, toggleMenuItemFlat, toggleSideBarMenu } from '../../../store/reducers/ui';
import { Checkbox, Select } from '../../../styles/common';
import { NAVBAR_DARK_VARIANTS, NAVBAR_LIGHT_VARIANTS, SIDEBAR_DARK_SKINS, SIDEBAR_LIGHT_SKINS } from '../../../utils/themes';



// styled components
export const HorizontalFormItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    margin: 0;
    padding-left: 8px;
    font-weight: 500 !important;
  }
`;

export const VerticalFormItem = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin: 0;
    padding: 0;
    font-weight: 500 !important;
  }
`;


const SidebarControl = () => {
  const scrollPosition = useScrollPosition();
  const dispatch = useDispatch();

  const darkMode = useSelector((state: any) => state.ui.darkMode);
  const footerFixed = useSelector((state: any) => state.ui.footerFixed);
  const headerFixed = useSelector((state: any) => state.ui.headerFixed);
  const layoutBoxed = useSelector((state: any) => state.ui.layoutBoxed);
  const headerBorder = useSelector((state: any) => state.ui.headerBorder);
  const menuSideBarCollapsed = useSelector((state: any) => state.ui.menuSidebarCollapsed);
  const layoutFixed = useSelector((state: any) => state.ui.layoutFixed);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);
  const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);

  const getContainerPaddingTop = useCallback(() => {
    if (headerFixed) {
      return `${16 - (scrollPosition <= 16 ? scrollPosition : 0)}px`
    }
    return `${73 - (scrollPosition <= 37 ? scrollPosition : 73)}px`
  }, [scrollPosition, headerFixed]);


  const handleHeaderFixedChange = () => {
    dispatch(toggleHeaderFixed());
  };
  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode());
  };
  const handleLayoutBoxedChange = () => {
    dispatch(toggleLayoutBox())
  }
  const handleHeaderBorderChange = () => {
    dispatch(toggleHeaderBorder())
  }
  const handleMenuSidebarCollapsed = () => {
    dispatch(toggleSideBarMenu())
  }
  const handleLayoutFixedChange = () => {
    dispatch(toggleLayoutFixed())
  }

  const handleMenuItemFlatChange = () => {
    dispatch(toggleMenuItemFlat())
  }
  const handleMenuChildIndentChange = () => {
    dispatch(toggleMenuChildIndent())
  }
  const handleFooterFixedChange = () => {
    dispatch(toggleFooterFixed());
  }
  const onNavbarVariantChange = (value: string) => {
    dispatch(setNavbarVariant(value));
  };
  const onSidebarSkinChange = (value: string) => {
    dispatch(setSidebarSkin(value));
  };


  return (
    <aside
      className='control-sidebar control-sidebar-dark'
      style={{
        top: 0,
        bottom: footerFixed ? "57px" : "0px",
        padding: `${getContainerPaddingTop()} 16px 16px 16px`,
        overflowY: 'scroll'
      }}
    >
      <h4>mateen.dev</h4>
      <hr className="mb-2" />
      <div style={{ padding: '8px 0' }}>
        <HorizontalFormItem>
          <Checkbox checked={darkMode} onChange={handleDarkModeChange} />
          <label>Dark mode</label>
        </HorizontalFormItem>
        <HorizontalFormItem>
          <Checkbox
            checked={layoutBoxed}
            onChange={handleLayoutBoxedChange}
          />
          <label>Boxed (Broken when header or footer is fixed)</label>
        </HorizontalFormItem>
      </div>
      <h6>Header Options</h6>
      <div className='mb-4'>
        <HorizontalFormItem>
          <Checkbox
            checked={headerFixed}
            onChange={handleHeaderFixedChange}
          />
          <label>Fixed</label>
        </HorizontalFormItem>
        <HorizontalFormItem>
          <Checkbox
            checked={headerBorder}
            onChange={handleHeaderBorderChange}
          />
          <label>No Border</label>
        </HorizontalFormItem>
      </div>
      <h6>Sidebar Options</h6>
      <div className="mb-4">
        <HorizontalFormItem>
          <Checkbox
            checked={menuSideBarCollapsed}
            onChange={handleMenuSidebarCollapsed}
          />
          <label>Collapse</label>
        </HorizontalFormItem>
        <HorizontalFormItem>
          <Checkbox
            checked={layoutFixed}
            onChange={handleLayoutFixedChange}
          />
          <label>Fixed</label>
        </HorizontalFormItem>
        <HorizontalFormItem>
          <Checkbox
            checked={menuItemFlat}
            onChange={handleMenuItemFlatChange}
          />
          <label>Nav Flat Style</label>
        </HorizontalFormItem>
        <HorizontalFormItem>
          <Checkbox
            checked={menuChildIndent}
            onChange={handleMenuChildIndentChange}
          />
          <label>Nav Child Indent</label>
        </HorizontalFormItem>
      </div>
      <h6>Footer Options</h6>

      <div className="mb-4">
        <HorizontalFormItem>
          <Checkbox
            checked={footerFixed}
            onChange={handleFooterFixedChange}
          ></Checkbox>
          <label>Fixed</label>
        </HorizontalFormItem>
      </div>

      <VerticalFormItem>
        <label>Light Navbar Variants</label>
        <Select
          className="mt-1"
          value={navbarVariant}
          options={NAVBAR_LIGHT_VARIANTS}
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
        />
      </VerticalFormItem>
      <VerticalFormItem>
        <label>Dark Navbar Variants</label>
        <Select
          className="mt-1"
          value={navbarVariant}
          options={NAVBAR_DARK_VARIANTS}
          onChange={(e: any) => onNavbarVariantChange(e.target.value)}
        />
      </VerticalFormItem>
      <VerticalFormItem>
        <label>Accent Color Variants</label>
        <Select className="mt-1" options={[]} disabled />
      </VerticalFormItem>
      <VerticalFormItem>
        <label>Light Sidebar Variants</label>
        <Select
          className="mt-1"
          value={sidebarSkin}
          options={SIDEBAR_LIGHT_SKINS}
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
      </VerticalFormItem>
      <VerticalFormItem>
        <label>Dark Sidebar Variants</label>
        <Select
          className="mt-1"
          value={sidebarSkin}
          options={SIDEBAR_DARK_SKINS}
          onChange={(e: any) => onSidebarSkinChange(e.target.value)}
        />
      </VerticalFormItem>
      <VerticalFormItem>
        <label>Brand Logo Variants</label>
        <Select className="mt-1" options={[]} disabled />
      </VerticalFormItem>

    </aside>
  )
}

export default SidebarControl
