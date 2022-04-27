import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Home from '../../pages/Home';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;


