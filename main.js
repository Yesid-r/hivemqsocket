var mqtt = require('mqtt')

var options = {
    host: '54d8553186bb49528d37b85f583d27f2.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'dairo',
    password: '23Dyesid4540'
}

// initialize the MQTT client
var client = mqtt.connect(options);


client.on('connect', function () {
    console.log('Connected');
});

client.on('error', function (error) {
    console.log(error);
});

client.on('message', function (topic, message) {
    
    console.log('Received message:', topic, message.toString());
});


client.subscribe('sensor1');
client.subscribe('sensor2');
