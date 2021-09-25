const morgan = require("morgan");
const cors = require("cors");
const express = require("express");

function registerMiddleware(app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
}

module.exports = registerMiddleware;
