const axios = require('axios');

exports.sendGupshupMessage = async (message) => {
  try {
    const response = await axios.post('https://api.gupshup.io/sm/api/v1/msg', {
      source: process.env.WHATSAPP_RECIPIENT_NUMBER,
      destination: process.env.WHATSAPP_RECIPIENT_NUMBER,
      message,
      'channel': 'whatsapp',
      'src.name': 'your_business_name'
    }, {
      headers: { 'apikey': process.env.GUPSHUP_API_KEY }
    });
    console.log('Message sent via Gupshup');
  } catch (error) {
    console.error('Error sending message via Gupshup:', error.message);
    throw new Error('Gupshup message failed');
  }
};
