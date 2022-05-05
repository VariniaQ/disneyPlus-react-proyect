import List from '../components/List/List';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from "../components/Header/Header"
import './Home.css'
function Home() {
    return (
        <>
            <Header />
            <div className="home-page" style={{ margin: '0 auto' }}>
                <CssBaseline />
                <Container className="general-container">
                    <List />
                    <List />
                    <List />
                </Container>

            </div >
        </>
    )
}

export default Home;
