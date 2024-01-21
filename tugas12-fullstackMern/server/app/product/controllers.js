const path = require("path");
const fs = require("fs");
const Products = require("./model.js");
const Categories = require("../category/model.js");
const Tags = require("../tag/model.js");
const { handleErr } = require("../utils.js");
const { rootPath } = require("../../config/config.js");

const GetProducts = async (req, res, next) => {
  try {
    let { skip = 0, limit, q = "", category = "", tags = [] } = req.query;
    let criteria = {};
    if (q.length) criteria = { ...criteria, name: { $regex: `${q}`, $options: "i" } };
    if (category.length) {
      category = await Categories.findOne({ name: { $regex: `${category}`, $options: "i" } });
      if (category) criteria = { ...criteria, category: category._id };
    }
    if (tags.length) {
      tags = await Tags.find({ name: { $in: tags } });
      criteria = { ...criteria, tags: { $in: tags.map((tag) => tag._id) } };
    }
    let count = await Products.find(criteria).countDocuments();
    let products = await Products.find(criteria)
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .populate("category")
      .populate("tags");
    return res.json({ count, products });
  } catch (err) {
    next(err);
  }
};

const AddProduct = async (req, res, next) => {
  try {
    let payload = req.body;
    if (payload.category) {
      let category = await Categories.findOne({ name: { $regex: payload.category, $options: "i" } });
      category ? (payload = { ...payload, category: category._id }) : delete payload.category;
    }
    if (payload.tags && payload.tags.length > 0) {
      let tags = await Tags.find({ name: { $in: payload.tags } });
      tags.length ? (payload = { ...payload, tags: tags.map((tag) => tag._id) }) : delete payload.tags;
    }
    if (req.file) {
      let ext = path.extname(req.file.originalname);
      let fileName = req.file.filename + ext;
      if (!fs.existsSync(path.join(rootPath, "public/images/products")))
        fs.mkdirSync(path.join(rootPath, "public/images/products"));
      let targetPath = path.resolve(path.join(rootPath, "public/images/products", fileName));
      payload = { ...payload, image: fileName };
      const src = fs.createReadStream(req.file.path);
      const dest = fs.createWriteStream(targetPath);
      src.pipe(dest);
      src.on("end", async () => {
        try {
          let product = await Products.create(payload);
          return res.json(product);
        } catch (err) {
          fs.unlinkSync(targetPath);
          handleErr(err, res);
          next(err);
        }
      });
      src.on("error", async () => {
        next(err);
      });
    } else {
      let product = await Products.create(payload);
      return res.json(product);
    }
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const UpdateProduct = async (req, res, next) => {
  try {
    let payload = req.body;
    let { id } = req.params;
    if (payload.category) {
      let category = await Categories.findOne({ name: { $regex: payload.category, $options: "i" } });
      category ? (payload = { ...payload, category: category._id }) : delete payload.category;
    }
    if (payload.tags && payload.tags.length > 0) {
      let tags = await Tags.find({ name: { $in: payload.tags } });
      tags.length ? (payload = { ...payload, tags: tags.map((tag) => tag._id) }) : delete payload.tags;
    }
    if (req.file) {
      let ext = path.extname(req.file.originalname);
      let fileName = req.file.filename + ext;
      let targetPath = path.resolve(path.join(rootPath, "public/images/products", fileName));
      payload = { ...payload, image: fileName };
      const src = fs.createReadStream(req.file.path);
      const dest = fs.createWriteStream(targetPath);
      src.pipe(dest);
      src.on("end", async () => {
        try {
          let product = await Products.findById(id);
          let currentImage = `${rootPath}/public/images/products/${product.image}`;
          if (fs.existsSync(currentImage)) fs.unlinkSync(currentImage);
          product = await Products.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
          return res.json(product);
        } catch (err) {
          fs.unlinkSync(targetPath);
          handleErr(err, res);
          next(err);
        }
      });
      src.on("error", async () => {
        next(err);
      });
    } else {
      let product = await Products.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
      return res.json(product);
    }
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const DeleteProduct = async (req, res, next) => {
  try {
    let product = await Products.findByIdAndDelete(req.params.id);
    let currentImage = `${rootPath}/public/images/products/${product.image}`;
    if (fs.existsSync(currentImage)) fs.unlinkSync(currentImage);
    return res.json(product);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { GetProducts, AddProduct, UpdateProduct, DeleteProduct };
