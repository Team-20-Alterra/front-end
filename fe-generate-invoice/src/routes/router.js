import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Index';
import GetApp from '../pages/DapatkanAplikasi';
import Login from '../pages/Login';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/getapp' exact element={<GetApp />} />
                <Route path='/login' exact element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router