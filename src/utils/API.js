import axios from "axios";
const BASE_URL = "https://www.omdbapi.com";
const API_KEY = "trilogy"
export default {
    getMovies: (movieTitle) => {
        return axios.get(`${BASE_URL}?s=${movieTitle}&apikey=${API_KEY}`).then(res => res.data)
    }
}