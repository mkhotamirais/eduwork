import express from "express";
import cors from "cors";
import routerMongodb from "./usingMongodb/router.js";
import db from "./usingMongoose/db.js";
import routerMongoose from "./usingMongoose/router.js";

const app = express();

app.use(cors());
app.use(express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routerMongodb);
app.use("/api/v2", routerMongoose);
app.use((req, res, next) => {
  res.status(404).send({
    status: "gagal",
    pesan: "halaman tidak ada",
  });
});

app.listen(3000, () => console.log("App is running on port 3000"));
