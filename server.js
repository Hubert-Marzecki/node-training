var http = require('http');
var events = require('events')

var eventEmitter = new events.EventEmitter();

// Event Trigger
var  server = http.createServer((req, res) => {
    eventEmitter.emit('request'); 
    res.end("dupa") 

});
// It's like event listener -> argumnet is action that thriger event (callback function)
eventEmitter.on('request', () => {
    console.log("request was made");
})

// Whten server is triggered - do "eventEmitter.on"
server.listen(3000, 'localhost', () => {
    console.log('go to MarssServ => 3000!');
});

