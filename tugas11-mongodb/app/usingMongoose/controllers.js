import Products from "./model.js";
import fs from "fs";
import path from "path";

export const getProducts = async (req, res) => {
  try {
    const product = await Products.find();
    res.send(product);
  } catch (error) {
    res.send(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const products = await Products.findById(req.params.id);
    res.send(products);
  } catch (error) {
    res.send(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    let data = req.body;
    if (req.file) {
      const allowedExt = [".jpg", ".jpeg", ".png"];
      const ext = path.extname(req.file.originalname);
      if (!allowedExt.includes(ext.toLowerCase())) {
        fs.unlinkSync(`./uploads/uploadMongoose/${req.file.filename}`);
        return res.status(422).json({ msg: "Invalid image extension" });
      }
      if (req.file.size > 2000000) {
        fs.unlinkSync(`./uploads/uploadMongoose/${req.file.filename}`);
        return res.status(422).json({ msg: "image must be less than 2 MB" });
      }
      const fname = req.file.filename + ext;
      fs.renameSync(req.file.path, `./uploads/uploadMongoose/${fname}`);
      data.image = fname;
      const products = await Products.create(data);
      res.status(201).json(products);
    } else {
      const products = await Products.create(data);
      res.status(201).json(products);
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.send({ message: "no data found" });
    const filepath = `./uploads/uploadMongoose/${product.image}`;
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    const deletedProduct = await Products.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.send({ message: "no data found" });
    let data = req.body;
    if (req.file) {
      const allowedExt = [".jpg", ".jpeg", ".png"];
      const ext = path.extname(req.file.originalname);
      if (!allowedExt.includes(ext.toLowerCase())) {
        fs.unlinkSync(`./uploads/uploadMongoose/${req.file.filename}`);
        return res.status(422).json({ msg: "Invalid image extension" });
      }
      if (req.file.size > 2000000) {
        fs.unlinkSync(`./uploads/uploadMongoose/${req.file.filename}`);
        return res.status(422).json({ msg: "image must be less than 2 MB" });
      }
      const fname = req.file.filename + ext;
      const filepath = `./uploads/uploadMongoose/${product.image}`;
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      fs.renameSync(req.file.path, `./uploads/uploadMongoose/${fname}`);
      data.image = fname;
      const updatedProduct = await Products.findByIdAndUpdate(req.params.id, data, { new: true });
      res.status(200).json(updatedProduct);
    } else {
      const updatedProduct = await Products.findByIdAndUpdate(req.params.id, data, { new: true });
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
