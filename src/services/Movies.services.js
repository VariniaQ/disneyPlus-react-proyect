import axios from 'axios'

const apiKey = '0ff5332abbc56d5b8800de5d07904251'
const baseUrl = 'https://api.themoviedb.org/3/'

const getMovies = () => {
    return axios.get(`${baseUrl}discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc`)
}

const getMovieDetail = (id) => {
    return axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc`)
}

export default getMovies;
export { getMovieDetail };
