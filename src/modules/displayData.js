import processData from "./processData";

const displayData = async (url) => {
  const newData = await processData(url);
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

export default displayData;
