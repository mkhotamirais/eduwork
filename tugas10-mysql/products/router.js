import express from "express";
import { createProduct, destroyProduct, getProductById, getProducts, updateProduct } from "./controller.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), createProduct);
router.patch("/products/:id", upload.single("image"), updateProduct);
router.delete("/products/:id", destroyProduct);

export default router;
