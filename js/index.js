const apiKey = "25c97c8023d71c56dc58de0d1b0b64a3"

const url =
 `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

 const weatherIcon = document.querySelector('.weatIcon')
 const searchInp = document.querySelector('.input')
 const searchBtn = document.querySelector('.btn')
 const weatherName = document.querySelector('.weather')
const content = document.querySelector('.content')


 async function getWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);
    if(response.status == 404){
        content.style.display = "none"
        searchInp.placeholder = "invalid city name"
        searchInp.classList.add('error')
    }
    const data = await response.json()

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&#8451'
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = "Wind: " + Math.round(data.wind.speed) + " m/s";

    if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "css/img/sun.png"
        weatherName.innerHTML = 'CLear.'
    }
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "css/img/cloudy.png"
        weatherName.innerHTML = 'Cloudy.'
    }
    if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "css/img/rain.png"
        weatherName.innerHTML = 'Rain.'
    }
    if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "css/img/cloudy.png"
        weatherName.innerHTML = 'Cloudy. Mist.'
    }
    if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "css/img/cloudy.png"
        weatherName.innerHTML = 'Cloudy. Drizzle.'
    }
    if(data.weather[0].main == 'Storm'){
        weatherIcon.src = "css/img/storm.png"
        weatherName.innerHTML = 'Storm. Downpour. High wind.'
    }
    searchInp.classList.remove('error')
    searchInp.placeholder = "enter a city"
   content.style.display = 'flex'
    content.style.visibility = "visible"


 }  

searchBtn.addEventListener('click', () => {
    getWeather(searchInp.value)
    searchInp.value = ""; 
})


searchInp.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        getWeather(searchInp.value)
        searchInp.value = ""; 
    }
    
})

 getWeather()

   
// function showTime() {
//     setInterval(() => {
//         const now = new Date()

// const dateOptions = Intl.DateTimeFormatOptions = {
    
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
// }
// const locale = navigator.language;
// const userDate = new Intl.DateTimeFormat(locale, dateOptions)
// document.querySelector('.time').innerHTML = `${userDate.format(now)}`
//     },1000)
// }

// showTime()