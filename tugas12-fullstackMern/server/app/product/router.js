const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { GetProducts, AddProduct, DeleteProduct, UpdateProduct } = require("./controllers.js");

const upload = multer({ dest: os.tmpdir() }).single("image");
// const { police_check } = require("../mw.js");

router.get("/", GetProducts);
router.post("/", upload, AddProduct);
router.put("/:id", upload, UpdateProduct);
router.delete("/:id", DeleteProduct);
// router.post("/", police_check("create", "Product"), upload, AddProduct);
// router.put("/:id", police_check("update", "Product"), upload, UpdateProduct);
// router.delete("/:id", police_check("delete", "Product"), DeleteProduct);

module.exports = router;
