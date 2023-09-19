const mongoose = require("mongoose");
const { dbUser, dbPass, dbHost, dbPort, dbName } = require("../app/config.js");

mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
);
console.log("database is running");
const db = mongoose.connection;

module.exports = db;
