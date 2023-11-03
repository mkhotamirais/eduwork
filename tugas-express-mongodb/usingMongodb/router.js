import express from "express";
import { deleteProduct, getProductById, getProducts, home, insertProduct, updateProduct } from "./controller.js";
import multer from "multer";
const upload = multer({ dest: "uploads/uploadMongodb/" });

const router = express.Router();

router.get("/", home);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), insertProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", upload.single("image"), updateProduct);

export default router;
