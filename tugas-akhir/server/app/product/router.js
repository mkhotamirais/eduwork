const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { AddProduct, GetProducts, UpdateProduct, DeleteProduct } = require("./controller");
const upload = multer({ dest: os.tmpdir() }).single("image");
const { police_check } = require("../mw.js");
const { rootPath } = require("../../config/config.js");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     return cb(null, `./${rootPath}/public/images/products`);
//   },
//   fileName: function (req, file, cb) {
//     return cb(null, `${Date.now()}_${image.originalname}`);
//   },
// });

// const upload = multer({ storage }).single("image");

router.get("/", GetProducts);
router.post("/", police_check("create", "Product"), upload, AddProduct);
router.put("/:id", police_check("update", "Product"), upload, UpdateProduct);
router.delete("/:id", police_check("delete", "Product"), DeleteProduct);

module.exports = router;
