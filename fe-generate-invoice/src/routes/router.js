import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Index';
import GetApp from '../pages/DapatkanAplikasi';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import RegisterBusiness from '../pages/RegisterBusiness';
import Layout from '../component/Layout';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import SentLinkPage from '../pages/SentLinkPage';
import SetNewPasswordPage from '../pages/SetNewPasswordPage';
import SuccessChangePasswordPage from '../pages/SuccessChangePasswordPage';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/getapp' element={<GetApp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/register-business' element={<RegisterBusiness />}></Route>
                <Route path='/forget-password' element={<ForgetPasswordPage />}></Route>
                <Route path='/sent-link' element={<SentLinkPage />}></Route>
                <Route path='/new-password' element={<SetNewPasswordPage />}></Route>
                <Route path='/success-password' element={<SuccessChangePasswordPage />}></Route>
                <Route path='/admin/*' element={<Layout />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router