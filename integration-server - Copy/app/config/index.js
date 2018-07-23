// config/index.js
const jsonfile = require("jsonfile")

let configName = process.env.NODE_ENV || 'development';

console.log("Config name ", configName);

let config = jsonfile.readFileSync(`${__dirname}/../../etc/${configName}.json`)

console.log("Config  ", config);

module.exports = config;
