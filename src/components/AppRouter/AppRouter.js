import { BrowserRouter, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Home from '../../pages/Home';
import MovieDetailPage from '../../pages/MovieDetailPage';
import SearchPage from '../../pages/SearchPage';
import Wishlist from '../../pages/Wishlist';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;


