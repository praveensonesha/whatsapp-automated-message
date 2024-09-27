const axios = require('axios');

exports.getLocationByIP = async () => {
  try {
    const response = await axios.get(`https://ipinfo.io/json?token=${process.env.IPINFO_API_KEY}`);
    const { city, region, loc } = response.data;
    return { city, region, loc };
  } catch (error) {
    console.error('Error fetching location:', error.message);
    throw new Error('Could not retrieve location');
  }
};
