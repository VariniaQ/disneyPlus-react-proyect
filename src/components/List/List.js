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

function List() {

    let token = localStorage.getItem('token');

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((res) => {
            setMovies(res.data.results)
        })
    }, []);

    return (
        <>
            {!token && <Navigate to="/login" />}
            <h2>Movies</h2>
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {movies.map((movie) => {
                    const { original_title, poster_path, id } = movie;

                    return (
                        <>
                            <SwiperSlide key={id}>
                                {/*TODO change the route later for a real route*/}
                                <Link to={`/movie/${id}`} className='card-movie-item'>
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={`${original_title}`} />
                                </Link>
                            </SwiperSlide>
                        </>

                    )
                })}
            </Swiper>
        </>
    )


}

export default List;