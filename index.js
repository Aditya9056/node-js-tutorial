// const Person = require('./person'); -->CommonJS Way
// import Person from './person'; --> ES6 Way
// const Person = require('./person'); 

// const person1 = new Person('jhon', 30);

// console.log(person1);

// person1.greeting();

// Server Stuff
const http = require('http');
const path = require('path');
const fs   = require('fs');
const PORT = process.env.PORT || 20039;

const server = http.createServer((req, res)=>{
    
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) =>{
    //         if(err){ throw err }
    //         res.writeHead(200, {'Conent-Type': 'text/html'});        
    //         res.end(content);
    //     })
    // }
    
    // if (req.url === '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) =>{
    //         if(err){ throw err }
    //         res.writeHead(200, {'Conent-Type': 'text/html'});        
    //         res.end(content);
    //     })
    // }

    // if (req.url === '/api/users'){
    //     const users = [
    //         { name: 'Bob', age: 41 },
    //         { name: 'Jhon', age: 43 }
    //     ];
    //     res.writeHead(200, {'Conent-Type': 'application/json'});        
    //     res.end(JSON.stringify(users));
    // }

    // Build file path
    let filepath = path.join(__dirname, 'public', req.url === '/'? 'index.html' : req.url);

    console.log(filepath);
    // Get extension of the file
    let extension = path.extname(filepath);
    
    // Initial Content Type
    let content_type = 'text/html';

    switch( extension ) {
        case '.js':
            content_type = 'text/javascript';
            break;
        
        case '.css':
            content_type = 'text/css';
            break;

        case '.json':
            content_type = 'application/json';
            break;

        case '.png':
            content_type = 'image/png';
            break;

        case '.jpg':
        content_type = 'image/jpg';
        break;
    }
        
    fs.readFile(filepath, (err, content)=> {

        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{

                    res.writeHead(200, {'Conent-Type': 'application/json'});     
                    res.end(content, 'utf8');

                });
            } else {
                // Some server error
                res.writeHead(500);     
                res.end('Server Error', `${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, {'Conent-Type': content_type});     
            res.end(content, 'utf8');
        }
    }); 
});

server.listen(PORT, () => console.log('Server Running on PORT', PORT));