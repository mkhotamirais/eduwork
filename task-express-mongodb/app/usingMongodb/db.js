import { MongoClient } from "mongodb";
import { mongodbUrl } from "../constants.js";

const client = new MongoClient(mongodbUrl);
const dbName = "taskmongodb";

(async () => {
  try {
    await client.connect();
    console.log("Koneksi mongodb berhasil");
  } catch (error) {
    console.log(error.message);
  }
})();

const db = client.db(dbName);

export default db;
