const mongoose = require("mongoose");
const { dbUser, dbPass, dbHost, dbName, dbPort } = require("./config.js");

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
console.log("database connect");
const db = mongoose.connection;

module.exports = db;
