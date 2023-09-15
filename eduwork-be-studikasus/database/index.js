const mongoose = require("mongoose");
const { dbUser, dbPass, dbHost, dbPort, dbName } = require("../app/config.js");

// (async () => {
//   try {
//     await mongoose.connect(
//       `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
//     );
//     console.log("Koneksi berhasil");
//   } catch (error) {
//     console.log(error.message);
//   }
// })();
mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`
);

const db = mongoose.connection;

module.exports = db;
