const router = require("express").Router();
const multer = require("multer");
const os = require("os");

const { store, index, update, destroy } = require("./controller.js");
const { police_check } = require("../../middlewares/index.js");

router.get("/products", index);
router.post(
  "/products",
  multer({ dest: os.tmpdir() }).single("image"),
  police_check("create", "Product"),
  store
);
router.put(
  "/products/:id",
  multer({ dest: os.tmpdir() }).single("image"),

  update
);
router.delete("/products/:id", destroy);

module.exports = router;
