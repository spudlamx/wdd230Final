const apiKey = "da9416922b409299c45f4481a55e1005";
const latitude = "20.51"; //Latitude of Idaho Falls, Idaho
const longitude = "-86.95"; //Longitude of Idaho Falls, Idaho
const weatherIcon = document.querySelector("#weather-icon");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Function to get current weather data
async function getCurrentWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const currentTemp = data.main.temp;
    const maxTemp = data.main.temp_max;
    const currentHumidity = data.main.humidity;
    const currentWeather = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    document.getElementById("currentTemp").textContent = `${currentTemp}°F`;
    document.getElementById(
      "currentHumidity"
    ).textContent = `${currentHumidity}%`;
    document.getElementById("currentWeather").textContent = currentWeather;
    document.getElementById("highTemp").textContent = `Today's high will be ${maxTemp}°F`;
  } catch (error) {
    console.log("Error fetching current weather:", error);
  }
}

// Function to get three-day forecast
async function getTomorrowsForecast() {
  try {
    const response = await fetch(forecastUrl);
    const data = await response.json();

    const forecastData = data.list.slice(0, 1); // Extracting the first three entries

    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = "";

    let currentDate = new Date(); // Initialize with current date

    forecastData.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000);
      currentDate.setDate(currentDate.getDate() + 1); // Increment the date for each forecasted day
      const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
      const temp = forecast.main.temp_max;
      const temp_min = forecast.main.temp_min;

      const weatherDesc = forecast.weather[0].description;

      const forecastElement = document.createElement("div");
      forecastElement.classList.add("infoPad");
      forecastElement.innerHTML = `<p>Tomorrow: ${temp}°F`;
      forecastContainer.appendChild(forecastElement);
    });
  } catch (error) {
    console.log("Error fetching forecast:", error);
  }
}

window.onload = function () {
  getCurrentWeather();
  getTomorrowsForecast();
};
