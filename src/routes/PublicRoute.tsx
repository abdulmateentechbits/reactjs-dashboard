import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.authentication);
  console.log("🚀 ~ PublicRoute ~ isLoggedIn:", isLoggedIn)

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoute