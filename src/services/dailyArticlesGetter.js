import { theMovieDbAPIToken, basePictureURL, baseURL } from "../Constants.js"

function getWeeklyTrendingArticles(){

    console.log(theMovieDbAPIToken)
    console.log(baseURL)
    return fetch(`${baseURL}trending/movie/week?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

function getDailyTrendindArticles(){

    //const basePictureURL = 'https://image.tmdb.org/t/p/w500/';

    return fetch(`${baseURL}trending/movie/day?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

function getPopularMovies(){

    //const basePictureURL = 'https://image.tmdb.org/t/p/w500/';

    return fetch(`${baseURL}movie/popular?api_key=${theMovieDbAPIToken}`)
    .then(res => res.json())
    .catch();
}

function search(query){

    return fetch(`${baseURL}search/movie?api_key=${theMovieDbAPIToken}&language=en-US&query=${query}`)
    .then(res => res.json())
    .catch();
}

export default {
    getWeeklyTrendingArticles,
    getDailyTrendindArticles,
    getPopularMovies,
    search,
}