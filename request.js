const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
const dial = response.dial({
    callerId: '+1234562133'
});
dial.number('+17736095420');

console.log(response.toString());