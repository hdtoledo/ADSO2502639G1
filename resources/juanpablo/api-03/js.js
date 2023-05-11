const apiKey = "1637e34efaf327cc32a7102ac57ccbfc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".wheater-icon")

async function checkWeather(ciudad){
    const response = await fetch(apiUrl + ciudad + `&appid=${apiKey}`);
    

    if(response.status == "404"){
        document.querySelector(".weather").style.display ="none";
        document.querySelector(".error").style.display = "block";

    } else{
        var data = await response.json();

    }
    
    console.log(data)

    document.querySelector(".ciudad").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "°C";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/Mist.png"}



      document.querySelector(".weather").style.display ="block";
      document.querySelector(".error").style.display = "none";
    }
      


searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);

});

