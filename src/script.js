function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let temperatureDayElement = document.querySelector("#temperature-day");
    let temperatureNightElement = document.querySelector("#temperature-night");
    let humidityConditionElement = document.querySelector("#humidity");
    let windConditionElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    temperatureDayElement.innerHTML = Math.round(response.data.main.temp_max);
    temperatureNightElement.innerHTML = Math.round(response.data.main.temp_min);
    humidityConditionElement.innerHTML = response.data.main.humidity;
    windConditionElement.innerHTML = Math.round(response.data.wind.speed);
    console.log(response);
}

let apiKey = "5ed1e5439462ada1b6de58f11508c5d7";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);