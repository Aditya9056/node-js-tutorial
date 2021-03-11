const event_emitter = require('events');
const uuid = require('uuid');

// UUID
// console.log(uuid.v4());

// Create class
class Logger extends event_emitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg })
    }
 }

// Logger stuff
// const fs = require('fs');
// const path = require('path');
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => {
//     fs.appendFile(path.join(__dirname, '/logs', 'logs.txt'), JSON.stringify(data)+'\n', err => { 
//         if(err){ throw err }
//         console.log('Logs files created.', data);
//     });
// });

// logger.log('User 1')
// logger.log('User 2')
// logger.log('User 3')

// Export
module.exports = Logger;