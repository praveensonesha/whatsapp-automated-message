const twilioService = require('../services/twilioService');
const gupshupService = require('../services/gupshupService');

exports.sendWhatsAppMessage = async (message) => {
  try {
    await twilioService.sendTwilioMessage(message);
  } catch (error) {
    console.error('Twilio failed, falling back to Gupshup');
    await gupshupService.sendGupshupMessage(message);
  }
};
