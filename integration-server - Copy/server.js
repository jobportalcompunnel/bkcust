const app = require("./app"); // index.js default

var argv = require('minimist')(process.argv.slice(2));

const config = require("./app/config");

console.log("argv ", process.argv);
console.log("ARGV ", argv);

const PORT = argv.port || 7070;
const IP = argv.ip || '127.0.0.1';
var environment = 

app.listen(PORT, IP);
console.log("Running on server ", IP, PORT);