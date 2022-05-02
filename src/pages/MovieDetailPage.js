// React
import { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// Components
import Header from "../components/Header/Header"
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
// CSS
import './MovieDetail.css'
// Services
import { getMovieDetail } from "../services/Movies.services";

const MovieDetailPage = () => {

    let token = localStorage.getItem('token');

    const [movieInfo, setMovieInfo] = useState({})

    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    let { id } = useParams();

    const { status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect(() => {
        getMovieDetail(id)
            .then((res) => {
                setMovieInfo(res.data)
            })
            .catch((err) => {
                setShowMessage({
                    status: true,
                    message: 'Error while movie image was loading',
                    type: 'error'
                })
            })
    }, [])

    return (
        <>
            {!token && <Navigate to="/login" />}
            <Header />
            <div className="container-background-image">
                <CssBaseline />
                <Container className="general-container" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieInfo.poster_path})`
                }} >
                    <div className="container-movie-info">
                        <h1>{movieInfo.original_title}</h1>
                        <Button variant="contained" endIcon={<PlayArrowIcon />}>
                            View now
                        </Button>
                        <h3>Description</h3>
                        <p>{movieInfo.overview}</p>
                    </div>

                </Container>
                <SnackBarMessage
                    status={status}
                    type={type}
                    handleClose={handleClose}
                    message={message}
                />
            </div>

        </>
    )
}

export default MovieDetailPage;