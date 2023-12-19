const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { store, index, destroy, update } = require("./controller.js");
const upload = multer({ dest: os.tmpdir() }).single("image");
const { police_check } = require("../mw.js");

router.get("/products", index);
router.post("/products", police_check("create", "Product"), upload, store);
router.put("/products/:id", police_check("update", "Product"), upload, update);
router.delete("/products/:id", police_check("delete", "Product"), destroy);

module.exports = router;
