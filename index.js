document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const car = document.querySelector(".car");
  const searchBtn = document.querySelector(".searchBtn");

  searchBtn.addEventListener("click", () => {
    car.classList.add("car-move");
    searchBtn.classList.add("loading");

    const loaderSvg = feather.icons.loader.toSvg();
    searchBtn.innerHTML = loaderSvg;

    const svg = searchBtn.querySelector("svg");
    if (svg) {
      svg.classList.add("feather");
    }
    const searchInput = document.querySelector("input");

  async function searchMovies() {
  const searchValue = searchInput.value;
  const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14489baa&s=${searchValue}`);
  const data = await response.json();

  console.log(data);
}
  });
});