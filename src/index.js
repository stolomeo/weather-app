import displayData from "./modules/displayData";
import searchCity from "./modules/searchCity";
import "./styles.css";

displayData(
  "https://api.openweathermap.org/data/2.5/weather?q=london&APPID=3b6208a31f3ddbc9ccd1d6206a490def&units=imperial"
);
