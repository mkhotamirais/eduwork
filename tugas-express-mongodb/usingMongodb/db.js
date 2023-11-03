import { MongoClient } from "mongodb";

const url = "mongodb://mkhotami:mkhotami@127.0.0.1:27017?authSource=admin";
const client = new MongoClient(url);
const dbName = "eduwork-tugas-mongodb";

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
