function getEnvString(name) {
  return process.env[name];
}

const config = {
  serviceName: "Products Service",
  port: getEnvString("PORT"),
};

module.exports = config;
