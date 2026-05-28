const movieListEl =document.querySelector('.movie-list')


async function main() {
    const id = localStorage.getItem("imdbID");
    const movies = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=14489baa`).then((res) => res.json());
    const movieData = await movies.json();
    console.log(movieData)

    movieListEl.innerHTML = movieData.map(movie =>
       ` <div class="movie">
        <div class="movie__title">
            Movie Title
        </div>
        <p class="movie__body">
            Movie Body
        </p>
    </div>
    `).join('')

}

main();