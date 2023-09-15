const express = require("express");
const router = express.Router();
const multer = require("multer");
const os = require("os");

const { index, store, update, destroy } = require("./controller.js");

router.get("/products", index);
router.post("/products", multer({ dest: os.tmpdir() }).single("image"), store);
router.put(
  "/products/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  update
);
router.delete("/products/:id", destroy);

module.exports = router;
