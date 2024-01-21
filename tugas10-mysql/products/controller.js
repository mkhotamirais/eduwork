import Products from "./model.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const response = await Products.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    if (req.file === null || req.file == undefined) return res.status(400).json({ msg: "No file uploaded" });
    const allowedExt = [".jpg", ".jpeg", ".png"];
    const ext = path.extname(req.file.originalname);
    if (!allowedExt.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid image extension" });
    const filesize = req.file.size;
    if (filesize > 2000000) return res.status(422).json({ msg: "image must be less than 2 MB" });
    const fname = req.file.filename + ext;
    fs.renameSync(req.file.path, `./uploads/${fname}`);
    req.body.image = fname;
    await Products.create(req.body);
    res.status(201).json({ msg: "create product success", data: req.body });
  } catch (error) {
    const ext = path.extname(req.file.originalname);
    const fname = req.file.filename + ext;
    const filepath = `./uploads/${fname}`;
    fs.unlinkSync(filepath);
    res.status(404).json(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "no data found" });
  try {
    if (req.file === null || req.file == undefined) return res.status(400).json({ msg: "No file uploaded" });
    const allowedExt = [".jpg", ".jpeg", ".png"];
    const ext = path.extname(req.file.originalname);
    if (!allowedExt.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid image extension" });
    const filesize = req.file.size;
    if (filesize > 2000000) return res.status(422).json({ msg: "image must be less than 2 MB" });
    const fname = req.file.filename + ext;
    const filepath = `./uploads/${product.image}`;
    fs.unlinkSync(filepath);
    fs.renameSync(req.file.path, `./uploads/${fname}`);
    req.body.image = fname;
    await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "update product success", data: req.body });
  } catch (error) {
    const ext = path.extname(req.file.originalname);
    const fname = req.file.filename + ext;
    const filepath = `./uploads/${fname}`;
    fs.unlinkSync(filepath);
    res.status(404).json(error.message);
  }
};

export const destroyProduct = async (req, res) => {
  const product = await Products.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "no data found" });
  try {
    const filepath = `./uploads/${product.image}`;
    fs.unlinkSync(filepath);
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "delete product success" });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
