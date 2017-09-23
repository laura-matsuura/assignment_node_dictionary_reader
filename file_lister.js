const fs = require('fs');

var exports = module.exports = {};

exports.listFiles = function() {
    return fs.readdirSync('./data');

}





