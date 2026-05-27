async function main() {
    const id = localStorage.getItem("imdbID");
    const movies = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=14489baa`).then((res) => res.json());
    const movieData = await movies.json();

    console.log(movieData);
}

main();