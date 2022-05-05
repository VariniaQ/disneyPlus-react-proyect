import { useState } from "react";
// Components
import Header from "../components/Header/Header";
// MATERIAL UI
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";


const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <Header />
            <div className="search-page" style={{ margin: '0 auto' }}>
                <CssBaseline />
                <Container className="">
                    <form>
                        <input
                            type="text"
                            name="search-field"
                            value={searchValue}
                            handleChange={handleChange}
                            placeholder="Search by title, character or genre"
                        />
                    </form>
                    <h2>Explore</h2>
                    <div className="">
                        Here goes the results
                    </div>
                </Container>
            </div >
        </>
    )
}

export default SearchPage;