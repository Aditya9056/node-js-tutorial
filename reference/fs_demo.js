const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test_fs'), {}, err => {
//     if(err){
//         throw err;
//     }
//     console.log('folder_created');
// });

// Create files
// fs.writeFile(path.join(__dirname, '/test_fs', 'hello.txt'), 'This is the hello world', err => {
//     if(err){
//         throw err;
//     }
//     console.log('file_created+data_written');

//     // Apend text
//     fs.appendFile(path.join(__dirname, '/test_fs', 'hello.txt'), '\nThis is the hello world 2', err => {
//         if(err){
//             throw err;
//         }
//         console.log('2nd data_written');
//     });
// });


// Read file
// fs.readFile(path.join(__dirname, '/test_fs', 'hello.txt'), 'utf8', (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

// Rename a file
fs.rename(path.join(__dirname, '/test_fs', 'hello.txt'), path.join(__dirname, '/test_fs', 'hello_world.txt'), err => {
    if(err){
        throw err;
    }
    console.log('file renamed');
});