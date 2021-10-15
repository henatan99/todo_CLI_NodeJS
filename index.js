//Requiring module file system (fs)
const fs = require('fs');

//Accessing arguments
const args = process.argv;

//The "index.js" is 8 characters long
//so -8 removes last 8 characters
const currentWorkingDirectory = args[1].slice(0, -8);

if (fs.existsSync(currentWorkingDirectory + 'todo.txt') === false) {
    let createStream = fs.createWriteStream('todo.txt');
    createStream.end();
}

if (fs.existsSync(currentWorkingDirectory + 'done.txt') === false) {
    let createStream = fs.createWriteStream('done.txt');
    createStream.end();
}
