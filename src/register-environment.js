const dotenv = require("dotenv");
const path = require("path");

function registerEnvironment() {
  dotenv.config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
  });
}
