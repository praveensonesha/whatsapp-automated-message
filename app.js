require('dotenv').config();
const express = require('express');
const messageController = require('./controllers/messageController');

const app = express();
const port = process.env.PORT || 3000;

// Trigger sending the WhatsApp message daily
app.get('/send-message', messageController.sendMessage);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
