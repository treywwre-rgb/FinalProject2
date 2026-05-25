document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const car = document.querySelector(".car-wrapper");
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
  });
});