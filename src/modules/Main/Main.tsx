import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setAuthentication } from '../../store/reducers/auth';
import Header from './Header/Header';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const dispatch = useDispatch();
    console.log("Local storage length", localStorage.length);
    
    const logout = () => {
        dispatch(setAuthentication(undefined));
        localStorage.removeItem("authentication");
    }
    return (
        <>
            <Header />
            <MenuSidebar />

            <div className="content-wrapper">
                <div className="pt-3">
                    <section className='content'>
                        <Outlet />
                    </section>
                </div>
            </div>
            
        </>

    )
}

export default Main