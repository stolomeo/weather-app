const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const getData = async (url) => {
  const response = await fetch(url, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
  const newData = processData(weatherData);
  displayData(newData);
};
const processData = (weatherData) => {
  myData = {
    name: weatherData.name,
    description: weatherData.weather[0].description,
    icon: weatherData.weather[0].icon,
    temp: weatherData.main.temp.toFixed(1) + "°F",
    feelsLike: weatherData.main.feels_like.toFixed(1) + "°F",
    humidity: weatherData.main.humidity + "°F",
    wind: weatherData.wind.speed.toFixed(0) + " mph",
  };
  return myData;
};

const displayData = (newData) => {
  const nameEl = (document.querySelector(".name").textContent = newData.name);
  const descriptionEl = (document.querySelector(".description").textContent =
    newData.description);
  const iconEl = (document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${newData.icon}@2x.png`);
  const tempEl = (document.querySelector(".temp").textContent = newData.temp);
  const feelsLikeEl = (document.querySelector(".feels-like").textContent =
    "Feels like " + newData.feelsLike);
  const humidityEl = (document.querySelector(".humidity").textContent =
    "Humidity: " + newData.humidity);
  const windEl = (document.querySelector(".wind").textContent =
    "Wind: " + newData.wind);
};

const handleEvent = (e) => {
  e.preventDefault();
  let location = searchInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3b6208a31f3ddbc9ccd1d6206a490def&units=imperial`;
  getData(url);
};
getData(
  "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3b6208a31f3ddbc9ccd1d6206a490def&units=imperial"
);
searchInput.addEventListener("search", handleEvent);
searchButton.addEventListener("click", handleEvent);
