import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../List/Header";
import Footer from '../List/Footer';

import Login from '../Login/Login';
import Home from '../../pages/Home';


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;


