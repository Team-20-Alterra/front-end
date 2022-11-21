import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Index';
import GetApp from '../pages/DapatkanAplikasi';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/getapp' exact element={<GetApp/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router