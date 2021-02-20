const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
const dial = response.dial({
    callerId: '+12345622133'
});
dial.number('+17736095420');

console.log(response.toString());