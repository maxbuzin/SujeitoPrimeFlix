import axios from "axios";

// Base: https://api.themoviedb.org/3
// API: /movie/now_playing?api_key=5fa75ef1f8ea2a3eeb2ae56156b78af9&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api