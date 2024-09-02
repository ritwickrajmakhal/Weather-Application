document.getElementById("location-form").addEventListener("submit", getWeather);

function getWeather(e) {
  e.preventDefault(); // Prevent the default form submission

  const city = e.target.location.value; // Get the city from the form
  const appid = "9ea95d7f67afd651695170a2a32e68cb"; // Your API key
  const weatherData = document.getElementById("weather-data");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch weather data"); // Specific error message
      }
      return res.json();
    })
    .then((data) => {
      weatherData.innerHTML = `<h2 id="location">${data.name}</h2>
        <p id="description">${data.weather[0].main}</p>
        <p id="temperature">${data.main.temp}&degC</p>`;
      e.target.location.value = "";
    })
    .catch((error) => {
      weatherData.innerHTML = "<p>Error: City not found";
    });
}
