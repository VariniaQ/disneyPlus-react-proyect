// React 
import { Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// CSS
import './List.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
// Services
import getMovies from '../../services/Movies.services';

// Alert Message
import SnackBarMessage from '../SnackBarMessage/SnackBarMessage';


function List() {

    let token = localStorage.getItem('token');

    const [movies, setMovies] = useState([]);

    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect(() => {
        getMovies()
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch((err) => {
                setShowMessage({
                    status: true,
                    message: 'Error. No movies to show',
                    type: 'error'
                })
            })
    }, []);

    const { status, type, message } = showMessage;

    return (
        <>

            {!token && <Navigate to="/login" />}
            {console.log(status)}
            <div className='container-section-list'>
                <h2>Movies</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={2}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        movies.length === 0 ? (
                            <>
                                <span>Empty, there's no movies</span>
                                <SnackBarMessage
                                    status={status}
                                    type={type}
                                    message={message}
                                    handleClose={handleClose}>
                                </SnackBarMessage>
                            </>
                        ) : (
                            <>
                                {
                                    movies.map((movie, index) => {
                                        const { original_title, poster_path, id } = movie;

                                        return (
                                            <>
                                                <SwiperSlide key={index}>
                                                    {/*TODO change the route later for a real route*/}
                                                    <Link to={`/movie/${id}`} className='card-movie-item'>
                                                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title}`} />
                                                    </Link>
                                                </SwiperSlide>
                                            </>

                                        )
                                    })
                                }
                            </>
                        )
                    }
                </Swiper>
            </div>
            {console.log(status)}
        </>
    )


}

export default List;