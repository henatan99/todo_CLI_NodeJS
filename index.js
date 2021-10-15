//Requiring module file system (fs)
const fs = require('fs');

//Accessing arguments
const args = process.argv;

//The "index.js" is 8 characters long
//so -8 removes last 8 characters
const currentWorkingDirectory = args[1].slice(0, -8);


