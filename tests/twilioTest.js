const twilioService = require('../services/twilioService');

twilioService.sendTwilioMessage('Test message for Twilio WhatsApp API')
  .then(() => console.log('Test successful'))
  .catch((error) => console.error('Test failed:', error));
