import displayData from "./displayData";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const searchCity = (e) => {
  e.preventDefault();
  let location = searchInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=3b6208a31f3ddbc9ccd1d6206a490def&units=imperial`;
  displayData(url);
};

searchInput.addEventListener("search", searchCity);
searchButton.addEventListener("click", searchCity);

export default searchCiity;
