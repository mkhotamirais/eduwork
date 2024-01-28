const express = require("express");
const app = express();
const router = require("./routes");
const log = require("./middlewares/logger");

app.use(log);
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use((req, res, next) => {
  res.status(404);
  res.send({
    nama: "error",
    pesan: req.originalUrl + "not found",
  });
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
