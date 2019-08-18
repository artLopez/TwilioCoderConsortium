const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSID, authToken);

client.messages
  .create({
     body: 'Thank you for coming to my Twilio SMS and IOT presentation!!',
     from: '+14159934260',
     to: '+18315785358'
   })
  .then(message => console.log(message.sid));
