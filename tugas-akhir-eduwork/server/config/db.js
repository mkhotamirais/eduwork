const mongoose = require("mongoose");
const { mongoUri } = require("./config");
// const { dbUser, dbPass, dbHost, dbName, dbPort } = require("./config.js");

// mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
mongoose.connect(mongoUri);
// console.log("database connect");
const db = mongoose.connection;

module.exports = db;
