import mongoose from "mongoose";

mongoose.connect(`mongodb://mkhotami:mkhotami@127.0.0.1:27017/eduwork-tugas-mongodb?authSource=admin`);
console.log("Koneksi mongoose berhasil");
const db = mongoose.connection;

export default db;
