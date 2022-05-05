// REACT
import { useState } from "react";
// Components
import Header from "../components/Header/Header";
import Results from "../components/Results/Results";
// CSS
import './SearchPage.css'

const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <Header />
            <SearchInput value={searchValue} updateValue={setSearchValue} />
            <h2>Explore</h2>
            <Results searchValue={searchValue} />
        </>
    )

}

const SearchInput = ({ value, updateValue }) => {

    const handleChange = (e) => {
        updateValue(e.target.value);
    }

    return (
        <form className="general-container">
            <input
                type="text"
                name="search-field"
                value={value}
                onChange={handleChange}
                placeholder="Search by title, character or genre"
            />
        </form>
    )
}

export default SearchPage;