import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../../pages/Home';

function AppRouter() {
    <BrowserRouter>
        <Routes>
            <h2>hi</h2>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
}

export default AppRouter;


