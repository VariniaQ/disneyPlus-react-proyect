import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { getMovieDetail } from "../services/Movies.services";
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {

    const [movieInfo, setMovieInfo] = useState({})

    const [showMessage, setShowMessage] = useState({
        status: false,
        message: '',
        type: ''
    });

    console.log(useParams())
    const { status, message, type } = showMessage
    const handleClose = () => {
        setShowMessage({
            ...showMessage,
            status: false
        })
    }

    useEffect(() => {
        getMovieDetail('414906')
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
            <Header />
            <CssBaseline />
            <Container className="general-container">
                <h1>{movieInfo.original_title}</h1>
            </Container>
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