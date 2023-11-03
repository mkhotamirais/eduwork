import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, home, updateProduct } from "./controller.js";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/uploadMongoose/" });

router.get("/", home);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", upload.single("image"), updateProduct);

export default router;
