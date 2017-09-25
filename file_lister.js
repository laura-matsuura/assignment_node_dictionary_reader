const fs = require('fs');
const path = './data/'

var exports = module.exports = {};

exports.listFiles = function() {
    return fs.readdirSync(path);
}

exports.getFileName = function(index) {
    const files = exports.listFiles(); 
    return files[index];
    
} 

exports.readFile = function(fileName) {
    return fs.readFileSync(path + fileName, 'utf8'); 
}


