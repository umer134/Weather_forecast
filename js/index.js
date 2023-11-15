const apiKey = "25c97c8023d71c56dc58de0d1b0b64a3"

const url =
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const weatherIcon = document.querySelector('.weather-icon')
const searchInp = document.querySelector('.search-inp')
const searchBtn = document.querySelector('.search-btn')
const weatherName = document.querySelector('.weather')
const content = document.querySelector('.weather-content')
const error = document.querySelector('.error');

async function getWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        error.style.display = 'block'
        content.style.display = 'none'
        searchInp.placeholder = 'invalid city name'
        searchInp.classList.add('inp_error')
    }
    const data = await response.json()

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451'
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " m/s";

    if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "css/img/clear.png"
        weatherName.innerHTML = 'Clear.'
    }
    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "css/img/cloud.png"
        weatherName.innerHTML = 'Cloudy.'
    }
    if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "css/img/rain.png"
        weatherName.innerHTML = 'Rain.'
    }
    if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "css/img/cloud.png"
        weatherName.innerHTML = 'Cloudy. Mist.'
    }
    if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "css/img/cloud.png"
        weatherName.innerHTML = 'Cloudy. Drizzle.'
    }
    if (data.weather[0].main == 'Storm') {
        weatherIcon.src = "css/img/storm.png"
        weatherName.innerHTML = 'Storm. Downpour. High wind.'
    }
    if (data.weather[0].main == 'Snowy') {
        weatherIcon.src = "css/img/snowy.png"
        weatherName.innerHTML = 'Snowy.'
    }
    searchInp.classList.remove('inp_error')
    searchInp.placeholder = 'enter a city'
    content.style.display = 'block'
    error.style.display = 'none'

}

searchBtn.addEventListener('click', () => {
    getWeather(searchInp.value)
    searchInp.value = "";
})


searchInp.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        getWeather(searchInp.value)
        searchInp.value = "";
    }
}
)