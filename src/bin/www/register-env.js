const dotenv = require("dotenv");
const path = require("path");

console.log("Registering environment...");
function registerEnv() {
  dotenv.config({
    path: path.resolve(`.env.${process.env.NODE_ENV}`),
  });
}

module.exports = registerEnv;
