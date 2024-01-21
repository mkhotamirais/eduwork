require("dotenv").config();
const path = require("path");

const {
  SECRET_KEY: sercretKey,
  SERVICE_NAME: serviceName,
  DB_HOST: dbHost,
  DB_PORT: dbPort,
  DB_USER: dbUser,
  DB_PASS: dbPass,
  DB_NAME: dbName,
  MONGO_URI: mongoUri,
} = process.env;

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  sercretKey,
  serviceName,
  dbHost,
  dbPort,
  dbUser,
  dbPass,
  dbName,
  mongoUri,
};
