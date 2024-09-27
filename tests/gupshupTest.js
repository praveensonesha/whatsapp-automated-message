const gupshupService = require('../services/gupshupService');

gupshupService.sendGupshupMessage('Test message for Gupshup WhatsApp API')
  .then(() => console.log('Test successful'))
  .catch((error) => console.error('Test failed:', error));
