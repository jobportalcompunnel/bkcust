// config/index.js
const jsonfile = require("jsonfile")

let configName = process.env.NODE_ENV || 'development';

let config = jsonfile.readFileSync(`${__dirname}/../../etc/${configName}.json`)

console.log("Config Name ", configName);

console.log("Config URL ", config);

module.exports = config;
