const apiKey = "83db10927d49ce5f21c0ddf60769bb54";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWearher(c) {
  const response = await fetch(apiUrl + c + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".city").innerHTML = "Invalid city name";
    document.querySelector(".city").style.color = "#FF9494";
  } else {
    var data = await response.json();
    let temp = Math.round(data.main.temp) + "<sup>°C</sup>";
    let city = data.name;
    let humidity = data.main.humidity + "%";
    let wind = data.wind.speed + " km/h";
    document.querySelector(".city").innerHTML = city;
    document.querySelector(".city").style.color = "white";
    document.querySelector(".temp").innerHTML = temp;
    document.querySelector(".humidity").innerHTML = humidity;
    document.querySelector(".wind").innerHTML = wind;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  }
}

searchBtn.addEventListener("click", () => checkWearher(searchBox.value));
searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
