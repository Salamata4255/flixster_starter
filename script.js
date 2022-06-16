const imageBaseUrl = 'https://image.tmdb.org/t/p'

const movieEl = document.querySelector("#movies-grid");
const movies = [
   {
   id: 338953,
   posterPath: "/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg",
   title: "Fantastic Beasts: The Secrets of Dumbledore",
   voteAverage: 6.9
   },
   {
   id: 526896,
   posterPath: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
   title: "Morbius",
   voteAverage: 6.4
   },
   {
   id: 752623,
   posterPath: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
   title: "The Lost City",
   voteAverage: 6.8
   },
   {
   id: 675353,
   posterPath: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
   title: "Sonic the Hedgehog 2",
   voteAverage: 7.7
   },
   {
   id: 639933,
   posterPath: "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
   title: "The Northman",
   voteAverage: 7.3
   },
   {
   id: 818397,
   posterPath: "/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg",
   title: "Memory",
   voteAverage: 7.3
   },
   {
   id: 507086,
   posterPath: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
   title: "Jurassic World Dominion",
   voteAverage: 6.7
   },
   {
   id: 453395,
   posterPath: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
   title: "Doctor Strange in the Multiverse of Madness",
   voteAverage: 7.4
   },
   {
   id: 831946,
   posterPath: "/cpWUtkcgRKeauhTyVMjYHxAutp4.jpg",
   title: "Interceptor",
   voteAverage: 6.3
   },
   {
   id: 610150,
   posterPath: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
   title: "Dragon Ball Super: Super Hero",
   voteAverage: 6.8
   },
   {
   id: 414906,
   posterPath: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
   title: "The Batman",
   voteAverage: 7.8
   },
   {
   id: 628900,
   posterPath: "/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
   title: "The Contractor",
   voteAverage: 6.6
   },
   {
   id: 629542,
   posterPath: "/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
   title: "The Bad Guys",
   voteAverage: 7.8
   },
   {
   id: 825808,
   posterPath: "/g2n1lFIFXC0lpG32ysUhFi0Uz61.jpg",
   title: "See for Me",
   voteAverage: 6
   },
   {
   id: 763285,
   posterPath: "/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
   title: "Ambulance",
   voteAverage: 7
   },
   {
   id: 648579,
   posterPath: "/bmxCAO0tz79xn40swJAEIJPRnC1.jpg",
   title: "The Unbearable Weight of Massive Talent",
   voteAverage: 7.3
   },
   {
   id: 361743,
   posterPath: "/wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg",
   title: "Top Gun: Maverick",
   voteAverage: 8.3
   }
];

function showMovies(movie){
    movieEl.innerHTML += `
    <div class='movie-card'> 
        <h4 class="movie-title">Title: ${movie.title} </h4>
        <img class="movie-poster" src="${imageBaseUrl}/w200${movie.posterPath}" alt="${movie.title}" title="${movie.title}"/>
        <h4 class ="movie-votes">Votes Average: ${movie.voteAverage} </h4>
    </div>
    `

}

movies.forEach(showMovies)
