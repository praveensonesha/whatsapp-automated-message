const axios = require('axios');

exports.getCurrentWeather = async (location) => {
  try {
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location.loc}`);
    const { condition, temp_c } = response.data.current;
    return `${condition.text}, ${temp_c}°C in ${location.city}, ${location.region}`;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    throw new Error('Could not retrieve weather data');
  }
};
