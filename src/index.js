const express = require("express");
const registerMiddleware = require("./middlewares");
const registerRoutes = require("./routes");
const config = require("./config");
const http = require("http");

function createApp({ config }) {
  const app = express();
  registerMiddleware(app);
  registerRoutes(app);
  app.config = config;
  return app;
}

function startApp() {
  const app = createApp({ config });
  const port = app.config.port;
  http.createServer(app).listen(port, () => {
    console.log(
      `${app.config.serviceName} is running on http://localhost:${app.config.port}`
    );
  });
}

module.exports = { startApp };
