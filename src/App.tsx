import { useEffect } from 'react';
import './App.css'
import { useWindowSize } from './hook/useWindowSize'
import { calculateWindowSize } from './utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowSize } from './store/reducers/ui';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRoute from './routes/PublicRoute';
import Login from './modules/Login/Login';
import Register from './modules/Resgister/Register';
import ForgetPassword from './modules/ForgetPassword/ForgetPassword';
import RecoverPassword from './modules/RecoverPassword/RecoverPassword';
import PrivateRoute from './routes/PrivateRoutes';
import Main from './modules/Main/Main';
import { ToastContainer } from 'react-toastify';
import BankIslami from './pages/bank/bank-islami';
import MeezanBank from './pages/bank/meezan-bank';
import Setting from './pages/setting/setting';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const calculatedSize = calculateWindowSize(windowSize.width);
    if (screenSize !== calculatedSize) {
      dispatch(setWindowSize(calculatedSize))
    }

  }, [windowSize.width]);

  

  return (
    <BrowserRouter>
      {/* Public routes */}
      <Routes>
        <Route path='/login' element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='/register' element={<PublicRoute />}>
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/forget-password' element={<PublicRoute />}>
          <Route path='/forget-password' element={<ForgetPassword />} />
        </Route>
        <Route path='/recover-password' element={<PublicRoute />}>
          <Route path='/recover-password' element={<RecoverPassword />} />
        </Route>
        
        {/* Private routes */}
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Main />}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/islamic-bank' element={<BankIslami />} />
          <Route path='/meezan-bank' element={<MeezanBank />} />
          <Route path='/setting' element={<Setting />} />
          
          </Route>
        </Route>

      </Routes>

      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </BrowserRouter>
  )
}

export default App
