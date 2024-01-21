import express from "express";
import cors from "cors";
import routerMongodb from "./app/usingMongodb/router.js";
import db from "./app/usingMongoose/db.js";
import routerMongoose from "./app/usingMongoose/router.js";
import { port } from "./app/constants.js";

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

app.listen(port, () => console.log(`App running on port ${port}`));
