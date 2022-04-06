const getData = async () => {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=3b6208a31f3ddbc9ccd1d6206a490def",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const newData = processData(weatherData);
  displayData(newData);
};

const processData = (weatherData) => {
  myData = {
    name: weatherData.name,
    description: weatherData.weather[0].description,
    temp: weatherData.main.temp,
    feelsLike: weatherData.main.feels_like,
    humidity: weatherData.main.humidity,
    wind: weatherData.wind.speed,
  };
  return myData;
};

const displayData = (newData) => {
  getData();
  const nameEl = (document.querySelector(".name").textContent = newData.name);
  const descriptionEl = (document.querySelector(".description").textContent =
    newData.description);
  const tempEl = (document.querySelector(".temp").textContent = newData.temp);
  const feelsLikeEl = (document.querySelector(".feelslike").textContent =
    newData.feelslike);
  const humidityEl = (document.querySelector(".humidity").textContent =
    newData.humidity);
  const windEl = (document.querySelector(".wind").textContent = newData.wind);
};

displayData();
