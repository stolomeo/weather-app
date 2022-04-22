import getData from "./getData";

const processData = async (url) => {
  const weatherData = await getData(url);
  return {
    name: weatherData.name,
    description: weatherData.weather[0].description,
    icon: weatherData.weather[0].icon,
    temp: weatherData.main.temp.toFixed(1) + "°F",
    feelsLike: weatherData.main.feels_like.toFixed(1) + "°F",
    humidity: weatherData.main.humidity + "°F",
    wind: weatherData.wind.speed.toFixed(0) + " mph",
  };
};

export default processData;
