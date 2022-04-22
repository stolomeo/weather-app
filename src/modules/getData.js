const getData = async (url) => {
  const response = await fetch(url, { mode: "cors" });
  const weatherData = await response.json();
  return weatherData;
};

export default getData;
