const EventEmitter = require('events');
// If you want to build anything custom, you need to extend the class /// Or just create the instance if you want to only emit and listen.

const customEmitter = new EventEmitter(); // This is the instance.
// on - will listen to a specific event; emit - will emit an event

customEmitter.on('response', () => {
    console.log(`Data Received`)
})

// once we have subscribed to this specific event, now we would want to emit
customEmitter.emit('response') // This argument has to match with the given name of the event.