import { theMovieDbAPIToken } from "../Constants.js"

function getWeeklyTrendingArticles(){

    const basePictureURL = 'https://image.tmdb.org/t/p/w500/';
    // return fetch(`https://api.nasa.gov/planetary/apod?api_key=wDLRvZoqczlCrILEtckgaCCOOlylGLPRx68HfmDV&start_date=2021-02-01&end_date=2021-03-11`)
    // .then(res => res.json())
    // .catch();

    return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

function getDailyTrendindArticles(){

    const basePictureURL = 'https://image.tmdb.org/t/p/w500/';

    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

function getPopularMovies(){

    const basePictureURL = 'https://image.tmdb.org/t/p/w500/';

    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

export default {
    getWeeklyTrendingArticles,
    getDailyTrendindArticles,
    getPopularMovies
}