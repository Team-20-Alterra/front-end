import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Index';
import GetApp from '../pages/DapatkanAplikasi';
import Login from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import RegisterBusiness from '../pages/RegisterBusiness';
import BerandaPage from '../pages/BerandaPage';
import PelangganPage from '../pages/PelangganPage';
import Layout from '../component/Layout';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/getapp'  element={<GetApp />} />
                <Route path='/login'  element={<Login />} />
                <Route path='/register'  element={<RegisterPage />}></Route>
                <Route path='/register-business'  element={<RegisterBusiness />}></Route>
            <Route path='/admin' element={<Layout />}>
                <Route path='beranda' element={<BerandaPage />} />
                <Route path='pelanggan' element={<PelangganPage />} />
             </Route>
            </Routes>

            
            
             
            
        </BrowserRouter>
    )
}

export default Router