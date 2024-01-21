import express from "express";
import multer from "multer";
import { deleteProduct, getProductById, getProducts, insertProduct, updateProduct } from "./controllers.js";
const upload = multer({ dest: "uploads/uploadMongodb" });

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", upload.single("image"), insertProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", upload.single("image"), updateProduct);

export default router;
