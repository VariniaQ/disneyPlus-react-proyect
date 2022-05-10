import axios from 'axios'

const apiKey = 'd3f8245ddd0ea6b00c455c62c9e6f0fb'
const baseUrl = 'https://api.themoviedb.org/3/'
const language = 'en-US';

const getMovies = (type) => {
    return axios.get(`${baseUrl}/movie/${type}?api_key=${apiKey}&language=${language}&sort_by=popularity.desc`)
}

const getMovieDetail = (id) => {
    return axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&language=${language}&sort_by=popularity.desc`)
}

const getSearchResult = (query) => {
    return axios.get(`${baseUrl}search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=1&include_adult=false`)
}

export default getMovies;
export { getMovieDetail, getSearchResult };
