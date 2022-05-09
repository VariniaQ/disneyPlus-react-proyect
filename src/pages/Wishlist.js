// React
import { useState } from "react";
// MUI
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
// Components
import Header from "../components/Header/Header";
import Results from '../components/Results/Results'

const Wishlist = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <>
            <div className="home-page">
                <Header />
                <CssBaseline />
                <Container className="general-container">
                    <h2>My wishlist</h2>
                    <Results searchValue={searchValue} />
                </Container>
            </div>
        </>
    )
}

export default Wishlist;
