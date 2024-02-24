import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setAuthentication } from '../../store/reducers/auth';
import Header from './Header/Header';
import MenuSidebar from './menu-sidebar/MenuSidebar';

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
            
        </>

    )
}

export default Main