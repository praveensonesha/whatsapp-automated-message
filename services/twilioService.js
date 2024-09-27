const twilio = require('twilio');

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendTwilioMessage = async (message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.WHATSAPP_RECIPIENT_NUMBER,
    });
    console.log('Message sent via Twilio');
  } catch (error) {
    console.error('Error sending message via Twilio:', error.message);
    throw new Error('Twilio message failed');
  }
};
