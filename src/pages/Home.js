import List from '../components/List/List';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Home() {
    return (
        <div className="home-page" style={{ margin: '0 auto' }}>
            <CssBaseline />
            <Container className="general-container">
                <List />
            </Container>
        </div >
    )
}

export default Home;
