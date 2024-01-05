import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "./controllers.js";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/uploadMongoose" });

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", upload.single("image"), updateProduct);

export default router;
