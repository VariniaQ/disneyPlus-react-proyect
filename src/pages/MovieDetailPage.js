// React
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// Components
import Header from "../components/Header/Header"
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader"
import BasicTabs from "../components/Tabs/Tabs";
// CSS
import './MovieDetail.css'
// Services
import { getMovieDetail } from "../services/Movies.services";

const MovieDetailPage = () => {

    let token = localStorage.getItem('token');

    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });
    const [movieInfo, setMovieInfo] = useState({})

    const [loader, setLoader] = useState(true);

    let { id } = useParams();

    const { status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    const navigate = useNavigate();

    useEffect(() => {
        getMovieDetail(id)
            .then((res) => {
                setMovieInfo(res.data)
            })
            .catch((err) => {
                setShowMessage({
                    status: true,
                    message: 'Error while movie detail was loading',
                    type: 'error'
                })
                navigate('/')
            })
            .finally(
                setTimeout(() => {
                    setLoader(false)
                }, 1000)
            )
    }, [])

    const tabsContent = ["SUGGESTED", "EXTRAS", "DETAILS"];

    return (
        <>
            {!token && <Navigate to="/login" />}
            <Header />
            <div className="movie-detailPage-container">
                <CssBaseline />
                <Container className="general-container" >
                    {loader ? <SpinnerLoader /> : (
                        <>
                            <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={`{movieInfo.original_title}`} name={`{movieInfo.original_title}`}></img>
                            <div className="container-movie-info">
                                <h1>{movieInfo.original_title}</h1>

                                <Button variant="contained" endIcon={<PlayArrowIcon />}>
                                    View now
                                </Button>

                                <BasicTabs tabsContent={tabsContent} movieInfo={movieInfo} />
                            </div>
                        </>
                    )}

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