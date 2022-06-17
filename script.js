const imageBaseUrl = 'https://image.tmdb.org/t/p';
const API = '749f2f95047cf82e0dd2cda7c052b21a';
const URL = 'https://api.themoviedb.org/3/';


const movieEl = document.querySelector("#movies-grid");
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector("#search-input" );
const searchBtnEl = document.querySelector("#search-btn");
const closeSearchBttnEl = document.querySelector('#close-search-btn');
const moviesSectionEl = document.querySelector("#movies-section");
const searchSectionRsltEl = document.querySelector("#search-results")


function showMovies(movie){
    
    
    movieEl.innerHTML += `
    <div class='movie-card'> 
        <h4 class="movie-title">Title: ${movie.title} </h4>
        <img class="movie-poster" src="${imageBaseUrl}/w200${movie.posterPath}" alt="${movie.title}" title="${movie.title}"/>
        <h4 class ="movie-votes">⭐⭐⭐ Votes Average: ${movie.votes} </h4>
        
    </div>
    `
}

let APIpage = 1;

async function fetchMovies(){
    const response = await fetch(`${URL}discover/movie?api_key=${API}&page=${APIpage}`)
    const responseJson = await response.json();
    
    const movies = responseJson.results.map(movieResult => ({
        title: movieResult.title,
        posterPath: movieResult.poster_path,
        votes: movieResult.vote_average
    })
    )
    movies.forEach(showMovies)
}
fetchMovies()


let loadMoreBttnEl = document.querySelector("#load-more-movies-btn");
function loadMore(){
    APIpage++;
    loadMoreBttnEl.dsabled = true;
    fetchMovies()
}

searchFormEl.addEventListener("submit", e => {
    e.preventDefault();
    movieEl.innerHTML = "";
    APIpage = 1;
    searchMovie(e)
    
})

searchFormEl.addEventListener("keypress", function(keyboard){
    if (keyboard.code === "Enter"){
        keyboard.preventDefault();
        movieEl.innerHTML = "";
        APIpage = 1;
        searchMovie(keyboard)
    }
})

closeSearchBttnEl.addEventListener("click", () =>{
    searchInputEl.value = "";
    movieEl.innerHTML = "";
    showMovies();
})

async function searchMovie(e){
    e.preventDefault();
    const query = searchInputEl.value;
    const response = await fetch(`${URL}search/movie?api_key=${API}&language=en-US&query=${query}`)
    const responseJson = await response.json();
    const results = responseJson.results.map(movieResult => ({
        
        title: movieResult.title,
        posterPath: movieResult.poster_path,
        votes: movieResult.vote_average
    })
    )
    console.log('results: ', results);
    results.forEach(showMovies)
    
    
    
}

