// React
import { useEffect, useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';

// Components
import Header from "../components/Header/Header"
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader"
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

    const [loader, setLoader] = useState(true);

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
            .finally(
                setTimeout(() => {
                    setLoader(false)
                }, 800))
    }, [])

    return (
        <>
            {!token && <Navigate to="/login" />}
            <Header />
            <div className="movie-detailPage-container">

                <CssBaseline />
                <Container className="general-container" >
                    {loader && <SpinnerLoader />}
                    <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={`{movieInfo.original_title}`} name={`{movieInfo.original_title}`}></img>
                    <div className="container-movie-info">
                        <h1>{movieInfo.original_title}</h1>
                        <Button variant="contained" endIcon={<PlayArrowIcon />}>
                            View now
                        </Button>
                        <h3>Description</h3>
                        <p>{movieInfo.overview}</p>
                        <h3><StarIcon fontSize={'small-x'} />Rating: <span>{movieInfo.vote_average} / 10</span></h3>
                        <h3>Genres:</h3>
                        <ul>
                            {movieInfo.genres?.map((genre, key) => {
                                return (
                                    <li key={key}>
                                        {genre.name}
                                    </li>
                                )
                            })}
                        </ul>
                        {/*TODO add a Tab component */}
                    </div>
                </Container>
            </div>
            <SnackBarMessage
                status={status}
                type={type}
                handleClose={handleClose}
                message={message}
            />

        </>
    )
}

export default MovieDetailPage;