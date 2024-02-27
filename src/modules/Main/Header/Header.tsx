import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication } from '../../../store/reducers/auth';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toggleControlSidebar, toggleSideBarMenu } from '../../../store/reducers/ui';
import { Link } from 'react-router-dom';
import MessageDropDown from './message-dropdown';
import NotificationDropdown from './notification-dropdown';
import LanguageDropdown from './language-dropdown';
import UserDropDown from './user-dropdown';

const Header = () => {
    const dispatch = useDispatch();
    const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
    const headerBorder = useSelector((state: any) => state.ui.headerBorder);
    const menuSideBarCollapsed = useSelector((state: any) => state.ui.menuSideBarCollapsed);

   

    const getContainerClasses = useCallback(() => {
        let classes = `main-header navbar navbar-expand ${navbarVariant}`;
        if (headerBorder) {
            classes = `${classes} border-bottom-0`
        }

        return classes;

    }, [navbarVariant, headerBorder]);


    const handleToggleMenuBar = () => {
        dispatch(toggleSideBarMenu())
    }
    const handleToggleControlSidebar = () => {
        dispatch(toggleControlSidebar())
    }


    return (
        <nav className={getContainerClasses()}>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Button
                        type='button'
                        variant='danger'
                        className='nav-link'
                        onClick={handleToggleMenuBar}
                    >
                        <i className="fas fa-bars" />
                    </Button>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                    <Link to="/" className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className='nav-item d-none d-sm-inline-block'>
                    <Link to="/" className='nav-link'>
                        Contact
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <MessageDropDown />
                <NotificationDropdown />
                <LanguageDropdown/>
                <UserDropDown/>
                <li className="nav-item">
                    <button
                        type="button"
                        className="nav-link"
                        onClick={handleToggleControlSidebar}
                    >
                        <i className="fas fa-th-large" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Header