import { Link } from 'react-router-dom';

const Cards = ({ movieId, path, title }) => {
    return (
        <Link to={`/movie/${movieId}`} className='card-movie-item'>
            <img src={`https://image.tmdb.org/t/p/w500/${path}`} alt={`${title}`} />
        </Link>
    )
}

export default Cards;