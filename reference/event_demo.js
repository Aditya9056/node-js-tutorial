const event_emitter = require('events');

// Create class
class my_emitter extends event_emitter { }

// Init object
const emitter_1 = new my_emitter();

// Event Listener
emitter_1.on('event', () => console.log('event_fired!'))

// Init Event
emitter_1.emit('event')