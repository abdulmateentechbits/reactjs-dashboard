import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setAuthentication } from '../../store/reducers/auth';

const Main = () => {
    const dispatch = useDispatch();
    console.log("Local storage length", localStorage.length);

    const logout = () => {
        dispatch(setAuthentication(undefined));
        localStorage.removeItem("authentication");
    }
    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', rowGap: 10 }}>
            <h1>Well come to the DashBoard</h1>
            <Button onClick={logout} variant='danger'>
                Logout
            </Button>
        </div>
    )
}

export default Main