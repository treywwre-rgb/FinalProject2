const movieListEl = document.querySelector('.movie-list');
const movieListEl = document.querySelector(".movies");
const searchInput = document.querySelector(".search__input").value;
const yearInput = document.querySelector(".year__input").value;
const typeInput = document.querySelector(".type__input").value;



async function main() {
    const id = localStorage.getItem("imdbID");
    const movies = await fetch(`https://www.omdbapi.com/?apikey=14489baa&s=$(searchInput)&y=$(yearInput)&type=$(typeInput)`   
    ).then((res) => res.json());

}

main();


movieListEl.innerHTML = movies.Search.map((movie) => {
    return `<div class="movie">
      <img src="${movie.Poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    </div>`
}).join("")