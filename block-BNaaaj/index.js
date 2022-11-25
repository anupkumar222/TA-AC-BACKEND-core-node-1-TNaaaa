console.log('Welcome to Nodejs');

var os = require('os');

var freeM = os.freemem();
var cpus = os.cpus().length;
var upTime = os.uptime();
var version = os.version();
var fs = require('fs');

fs.readFile('./file.md', (err, content) => {
    console.log(err, content);
})

fs.unlink();

console.log(freeM, cpus, upTime, version);
// var fs = require('fs');

// fs.readFile('./')