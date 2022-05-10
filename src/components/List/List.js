// React 
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// CSS
import './List.css'
// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// Components
import SnackBarMessage from '../SnackBarMessage/SnackBarMessage';
import Card from '../Card/Card';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';

// Services
import getMovies from '../../services/Movies.services';

function List({ movieType, title }) {

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
        getMovies(movieType)
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

            <div className='container-section-list'>
                <h2>{title}</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={2}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    {movies.length === 0 ? (
                        <>
                            <SpinnerLoader />
                            <span>Empty, there's no movies</span>
                        </>
                    ) : (
                        <>
                            {
                                movies.map((movie, index) => {
                                    const { original_title, backdrop_path, id } = movie;

                                    return (
                                        <SwiperSlide key={index}>
                                            <Card key={id} movieId={id} path={backdrop_path} title={original_title} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </>
                    )
                    }
                </Swiper>
            </div>
            <SnackBarMessage
                status={status}
                type={type}
                message={message}
                handleClose={handleClose}>
            </SnackBarMessage>
        </>
    )


}

export default List;