const mqtt = require('mqtt');
const WebSocket = require('ws');


const mqttOptions = {
    host: '54d8553186bb49528d37b85f583d27f2.s2.eu.hivemq.cloud',
    port: 8883,
    protocol: 'mqtts',
    username: 'dairo',
    password: '23Dyesid4540'
}


const mqttClient = mqtt.connect(mqttOptions);


const wss = new WebSocket.Server({ port: 8081 }); 


wss.on('connection', (ws) => {
    console.log('WebSocket connected');

    
    mqttClient.on('message', (topic, message) => {
        
        ws.send(JSON.stringify({ topic, message: message.toString() }));
    });

    
    ws.on('close', () => {
        console.log('WebSocket disconnected');
    });
});


mqttClient.on('connect', () => {
    console.log('Connected to MQTT');
    mqttClient.subscribe('sensor1');
    mqttClient.subscribe('sensor2');
});

mqttClient.on('error', (error) => {
    console.error('MQTT Error:', error);
});
