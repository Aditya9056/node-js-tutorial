const http = require('http');

// Create a server object
http.createServer((req, res) => {
    //Write a response
    res.write('Hello from the Server')
    res.end()
}).listen(20039, () => console.log('Server Running.'));