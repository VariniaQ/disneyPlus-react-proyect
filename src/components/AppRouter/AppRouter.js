import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Home from '../../pages/Home';
import MovieDetailPage from '../../pages/MovieDetailPage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;


