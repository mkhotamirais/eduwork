import mongoose from "mongoose";
import { mongooseUrl } from "../constants.js";

mongoose.connect(mongooseUrl);
console.log("Koneksi mongoose berhasil");
const db = mongoose.connection;

export default db;
