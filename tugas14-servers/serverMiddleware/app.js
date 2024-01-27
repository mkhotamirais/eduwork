const express = require("express");
const router = express.Router();
const cors = require("cors");

const app = express();

// third party middleware
app.use(cors());

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// application level
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  req.nama = "ahmad";
  next();
});

app.get("/", (req, res) => {
  console.log(req.nama);
  res.json("halo");
});

// router level
app.use("/products", (req, res) => {
  res.json({ message: "products page" });
});

app.use("/users", (req, res) => {
  res.json({ message: "users page" });
});

// error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.json({ message: err.message });
});

app.listen(3000, () => console.log("running"));
