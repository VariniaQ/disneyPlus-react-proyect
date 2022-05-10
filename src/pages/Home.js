import { Navigate } from 'react-router-dom';

import List from '../components/List/List';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from "../components/Header/Header"

import './Home.css'

function Home() {
    return (
        <>
            {!localStorage.getItem('token') ? (
                <Navigate to='/login' />
            ) : (
                <>
                    <Header />
                    <div className="home-page" style={{ margin: '0 auto' }}>
                        <CssBaseline />
                        <Container className="general-container">
                            <List
                                movieType={'top_rated'}
                                title={"Top rated"}
                            />
                            <List
                                movieType={'now_playing'}
                                title={"Now playing!"}
                            />
                            <List
                                movieType={'popular'}
                                title={"Popular"}
                            />

                            <List
                                movieType={'upcoming'}
                                title={"Upcoming"}
                            />
                        </Container>

                    </div >
                </>
            )}
        </>
    )
}

export default Home;
