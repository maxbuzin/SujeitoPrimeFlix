// API KEY:
    // b13e9dbe6a594b6d52752d818420137c
// API Read Access Token:
    // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTNlOWRiZTZhNTk0YjZkNTI3NTJkODE4NDIwMTM3YyIsIm5iZiI6MTcyMzY2NDgyOC4zNDkzNDUsInN1YiI6IjY2YmQwOGNjYTkyZThlOWMxZTliNTZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9GDtFilZQ6yO0hdj1nucNKPn4L86rxTbFfNnsDwhgI
// API URL:
    // /movie/now_playing?api_key=b13e9dbe6a594b6d52752d818420137c&language=pt-BR

import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api