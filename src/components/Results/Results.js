// React
import { useState, useEffect } from "react";
// COMPONENTS
import Card from '../Card/Card';
// SERVICES
import getMovies, { getSearchResult } from '../../services/Movies.services'
// CSS
import './Results.css'

const Results = ({ searchValue }) => {

    const [moviesList, setMoviesList] = useState([]);
    //TODO add catch 
    useEffect(() => {
        if (searchValue === '' || []) {
            getMovies()
                .then((res) => {
                    setMoviesList(res.data.results)
                })
        }
    }, [])

    useEffect(() => {
        getSearchResult(searchValue)
            .then((res) => {
                setMoviesList(res.data.results)
            })
    }, [searchValue]);

    return (
        <div className="results-container">
            {moviesList.length === 0 && <h3>No results</h3>}
            {moviesList.map((movie) => {
                const { id, backdrop_path, original_title } = movie;

                return (
                    <div className="swiper-slider" key={id}>
                        <Card movieId={id} path={backdrop_path} title={original_title} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default Results;