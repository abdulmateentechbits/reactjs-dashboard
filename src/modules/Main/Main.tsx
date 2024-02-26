import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setAuthentication } from '../../store/reducers/auth';
import Header from './header/Header';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import { Outlet } from 'react-router-dom';
import { toggleSideBarMenu } from '../../store/reducers/ui';
import Footer from './footer/footer';
import SidebarControl from './sidebar-control/sidebar-control';

const Main = () => {
    const dispatch = useDispatch();
    console.log("Local storage length", localStorage.length);

    const logout = () => {
        dispatch(setAuthentication(undefined));
        localStorage.removeItem("authentication");
    }
    const handleToggleMenuSideBar = () => {
        dispatch(toggleSideBarMenu())
    }

    return (
        <>
            <Header />
            <MenuSidebar />

            <div className="content-wrapper">
                <div className="pt-3 pl-2">
                    <section className='content'>
                        <Outlet />
                    </section>
                </div>
            </div>

            <Footer />

            <SidebarControl />

            <div
                id='side-bar-overlay'
                role='presentation'
                onClick={handleToggleMenuSideBar}
                onKeyDown={() => { }}
            />

        </>

    )
}

export default Main