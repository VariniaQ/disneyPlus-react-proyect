// React
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
// MUI
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// Components
import Header from "../components/Header/Header"
import SnackBarMessage from "../components/SnackBarMessage/SnackBarMessage";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader"
import BasicTabs from "../components/Tabs/Tabs";
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

    const wishlistItem_name = 'myWishlist';
    const [moviesWishlist, setMoviesWishlist] = useState(JSON.parse(localStorage.getItem(wishlistItem_name)) || []);

    const [iconChange, setIconChange] = useState(false);

    const handleClick = (movie) => {
        const movieExist = moviesWishlist.find(movieList => movieList.id === movie.id)
        if (movieExist) {
            // delete items in the wishlist
            const wishlistFilter = moviesWishlist.filter(movieWishlist => movieWishlist.id !== movie.id)
            localStorage.setItem(wishlistItem_name, JSON.stringify(wishlistFilter))
            setIconChange(false)
        } else {
            // add new items to wishlist
            localStorage.setItem(wishlistItem_name, JSON.stringify([...moviesWishlist, movie]))
            setMoviesWishlist([...moviesWishlist, movie])
            setIconChange(true)
        }
    }

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

                                <Stack direction="row" alignItems="center" spacing={4}>

                                    <Button className="btn-view-movie" variant="contained" endIcon={<PlayArrowIcon />} >
                                        View now
                                    </Button>
                                    <IconButton color="primary" onClick={() => handleClick(movieInfo)} >
                                        {(!iconChange) ? <AddCircleIcon fontSize="large" /> : <CheckCircleIcon fontSize="large" />}
                                    </IconButton>
                                </Stack>

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