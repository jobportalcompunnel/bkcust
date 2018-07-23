const app = require("./app"); // index.js default
const config = require("./app/config")
var argv = require('minimist')(process.argv.slice(2))
console.log("process argv", process.argv)
console.log("argv", argv)

const PORT = argv.PORT || 7070;
const IP = argv.IP || '127.0.0.1'
app.listen(PORT, IP);

console.log("Running on server  ", PORT, " <> ", IP)