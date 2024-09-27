const aiService = require('../services/aiService');
const locationService = require('../services/locationService');
const weatherService = require('../services/weatherService');
const sendMessage = require('../utils/sendMessage');

exports.sendMessage = async (req, res) => {
  try {
    // Get weather and location data
    const location = await locationService.getLocationByIP();
    const weather = await weatherService.getCurrentWeather(location);
    
    // Generate Shayari using Google Generative AI
    const shayari = await aiService.generateShayari(weather);

    // Send the message using Twilio (fallback to Gupshup if credits are exhausted)
    await sendMessage.sendWhatsAppMessage(shayari);
    
    res.send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Error sending message');
  }
};
