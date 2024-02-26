import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication } from '../../../store/reducers/auth';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toggleSideBarMenu } from '../../../store/reducers/ui';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const navbarVariant = useSelector((state: any) => state.ui.navbarVariant);
    const headerBorder = useSelector((state: any) => state.ui.headerBorder);
    const menuSideBarCollapsed = useSelector((state: any) => state.ui.menuSideBarCollapsed);

    const logout = () => {
        dispatch(setAuthentication(undefined));
        localStorage.removeItem("authentication");
    }

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
            <ul className='nabar-nav ml-auto'>

              <li className="nav-item">
                <button type='button' className="nav-link">
                    <i className="fas fa-th-large" />
                </button>
              </li>
            </ul>
        </nav>
    )
}

export default Header