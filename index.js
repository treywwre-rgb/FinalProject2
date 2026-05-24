const car = document.querySelector('.car-wrapper');
const searchBtn = document.querySelector('button');

searchBtn.addEventListener('click', () => {
    car.classList.add('car-move');
});