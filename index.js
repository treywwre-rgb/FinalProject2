function showMovieDetails(imdbID) {
  localStorage.setItem("imdbID", imdbID);
  window.location.href = `/movie.html?id=${imdbID}`;
}
  function filterMovies(event) {
  console.log(event.target.value);
}
document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const car = document.querySelector(".car-wrapper");
  const searchBtn = document.querySelector(".searchBtn");
  const searchInput = document.querySelector("input");

  searchBtn.addEventListener("click", () => {
    car.classList.add("car-move");
    searchBtn.classList.add("loading");

    const loaderSvg = feather.icons.loader.toSvg();
    searchBtn.innerHTML = loaderSvg;

    const svg = searchBtn.querySelector("svg");
    if (svg) {
      svg.classList.add("feather");
    }

    searchMovies();
  });



  async function searchMovies() {
    const searchValue = searchInput.value;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=14489baa&s=${searchValue}`,
      );
      const data = await response.json();
      const dataListEl = document.querySelector(".movie-list");

      if (!data.Search) {
        dataListEl.innerHTML = "No movies found";
        return;
      }

      dataListEl.innerHTML = data.Search.map((movie) =>
        responseHTML(movie),
      ).join("");
    } catch (error) {
      console.error("Error fetching movies:", error);
      document.querySelector(".movie-list").innerHTML =
        "Error fetching movies. Please try again.";
    }
  }

  function responseHTML(response) {
    return `<div class="movie-card" onclick="showMovieDetails('${response.imdbID}')">
      <div class="movie-card__container">
          <h3>${response.Title}</h3>
          <p><b>Year:</b> ${response.Year}</p>
          <p><b>Rated:</b> ${response.Rated || "N/A"}</p>
          <p><b>Released:</b> ${response.Released || "N/A"}</p>
          <p><b>Runtime:</b> ${response.Runtime || "N/A"}</p>
          <p><b>Genre:</b> ${response.Genre || "N/A"}</p>
          <p><b>Director:</b> ${response.Director || "N/A"}</p>
          <p><b>Poster:</b> <img src="${response.Poster}" alt="Movie Poster" class="movie-card__image"></p>
      </div>
    </div>`;
  }
});