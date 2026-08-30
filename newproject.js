const apiKey="4b982d3aa7c3bbf9f6c6c0f3eeb931f7";
const apiUrl="https://openweathermap.org";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        // Fixed data tracking array index [0] to keep the button from crashing
        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weather_icon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "mist.png";
        }
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
