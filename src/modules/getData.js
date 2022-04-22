const getData = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });
    const weatherData = await response.json();
    return weatherData;
  } catch (err) {
    console.error(err);
  }
};

export default getData;
