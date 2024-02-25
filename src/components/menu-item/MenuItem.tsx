import React, { useEffect, useState } from 'react'
import { IMenuItem } from '../../modules/Main/menu-sidebar/MenuSidebar'
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({ menuItem }: { menuItem: IMenuItem }) => {
    const [t] = useTranslation();
    const [isMenuExtended, setIsMenuExtended] = useState(false);
    const [isExpandable, setIsExpandable] = useState(false);
    const [isMainActive, setIsMainActive] = useState(false);
    const [isOneOfChildrenActive, setIsOneOfChildrenActive] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // use effects
    useEffect(() => {
        if (location) {
            calculateIsActive(location);
        }
    }, [location, isExpandable, menuItem]);

    useEffect(() => {
        if (!isMainActive && !isOneOfChildrenActive) {
            setIsMenuExtended(false);
        }
    }, [isMainActive, isOneOfChildrenActive]);

    useEffect(() => {
        setIsExpandable(
            Boolean(menuItem && menuItem.children && menuItem.children.length > 0)
        );
    }, [menuItem]);

    // function
    const toggleMenu = () => {
        setIsMenuExtended(!isMenuExtended);
    };

    const handleMainMenuAction = () => {
        if (isExpandable) {
            toggleMenu();
            return;
        }
        navigate(menuItem.path ? menuItem.path : '/');
    };

    const calculateIsActive = (url: Location) => {
        setIsMainActive(false);
        setIsOneOfChildrenActive(false);
        if (isExpandable && menuItem && menuItem.children) {
            menuItem.children.forEach((item) => {
                if (item.path === url.pathname) {
                    setIsOneOfChildrenActive(true);
                    setIsMenuExtended(true);
                }
            });
        } else if (menuItem.path === url.pathname) {
            setIsMainActive(true);
        }
    };



    return (
        <li className={`nav-item ${isMenuExtended ? "menu-open" : ""}`}>
            <a
                className={`nav-link ${isMainActive || isOneOfChildrenActive ? "active" : ""}`}
                role='link'
                onClick={handleMainMenuAction}
                style={{ cursor: 'pointer' }}
            >
                <i className={`${menuItem.icon}`}></i>
                <p>{menuItem.name}</p>
                {
                    isExpandable ? <i className="right fas fa-angle-left" /> : null
                }
            </a>
            {
                isExpandable &&
                menuItem &&
                menuItem.children &&
                menuItem.children.map((item)=>(
                    <ul key={item.name} className='navbar nav-treeview'>
                     <li className='nav-item'>
                        <NavLink to={`${item.path}`} className="nav-link">
                          <i className={`${item.icon}`} />
                          <p>{item.name}</p>
                        </NavLink>
                     </li>
                    </ul>
                ))
            }
        </li>
    )
}

export default MenuItem
