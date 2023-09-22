const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const upload = multer({ dest: os.tmpdir() });

const { index, store, update, destroy } = require("./controller.js");
const { police_check } = require("../mw.js");

router.get("/products", index);
router.post(
  "/products",
  police_check("create", "Product"),
  upload.single("image"),
  store
);

router.put(
  "/products/:id",
  police_check("update", "Product"),
  upload.single("image"),
  update
);
router.delete("/products/:id", police_check("delete", "Product"), destroy);

module.exports = router;
