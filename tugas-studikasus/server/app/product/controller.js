const path = require("path");
const fs = require("fs");
const config = require("../../config/config.js");
const Product = require("./model.js");
const { handleErr } = require("../utils.js");
const Category = require("../category/model.js");
const Tag = require("../tag/model.js");

const store = async (req, res, next) => {
  try {
    let payload = req.body;
    if (payload.category) {
      let category = await Category.findOne({
        name: { $regex: payload.category, $options: "i" },
      });
      category
        ? (payload = { ...payload, category: category._id })
        : delete payload.category;
    }
    if (payload.tags && payload.tags.length > 0) {
      let tags = await Tag.find({ name: { $in: payload.tags } });
      tags.length
        ? (payload = { ...payload, tags: tags.map((tag) => tag._id) })
        : delete payload.tags;
    }
    if (req.file) {
      let originalExt = path.extname(req.file.originalname);
      let fileName = req.file.filename + originalExt;
      let targetPath = path.resolve(
        config.rootPath,
        `public/images/products/${fileName}`
      );
      payload = { ...payload, image_url: fileName };
      const src = fs.createReadStream(req.file.path);
      const dest = fs.createWriteStream(targetPath);
      src.pipe(dest);
      src.on("end", async () => {
        try {
          let product = new Product(payload);
          await product.save();
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
      let product = new Product(payload);
      await product.save();
      return res.json(product);
    }
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    let { skip = 0, limit = 8, q = "", category = "", tags = [] } = req.query;
    let criteria = {};
    if (q.length) {
      criteria = { ...criteria, name: { $regex: `${q}`, $options: "i" } };
    }
    if (category.length) {
      category = await Category.findOne({
        name: { $regex: `${category}`, $options: "i" },
      });
      if (category) {
        criteria = { ...criteria, category: category._id };
      }
    }
    if (tags.length) {
      tags = await Tag.find({ name: { $in: tags } });
      criteria = { ...criteria, tags: { $in: tags.map((tag) => tag._id) } };
    }
    let count = await Product.find(criteria).countDocuments();
    let products = await Product.find(criteria)
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .populate("category")
      .populate("tags");
    return res.json({ count, products });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let payload = req.body;
    let { id } = req.params;
    if (payload.category) {
      let category = await Category.findOne({
        name: { $regex: payload.category, $options: "i" },
      });
      category
        ? (payload = { ...payload, category: category._id })
        : delete payload.category;
    }
    if (payload.tags && payload.tags.length > 0) {
      let tags = await Tag.find({ name: { $in: payload.tags } });
      tags.length
        ? (payload = { ...payload, tags: tags.map((tag) => tag._id) })
        : delete payload.tags;
    }
    if (req.file) {
      let originalExt = path.extname(req.file.originalname);
      let fileName = req.file.filename + originalExt;
      let targetPath = path.resolve(
        config.rootPath,
        `public/images/products/${fileName}`
      );
      payload = { ...payload, image_url: fileName };
      const src = fs.createReadStream(req.file.path);
      const dest = fs.createWriteStream(targetPath);
      src.pipe(dest);
      src.on("end", async () => {
        try {
          let product = await Product.findById(id);
          let currentImage = `${config.rootPath}/public/images/products/${product.image_url}`;
          if (fs.existsSync(currentImage)) {
            fs.unlinkSync(currentImage);
          }
          product = await Product.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
          });
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
      let product = await Product.findByIdAndUpdate(id, payload, {
        new: true,
      });
      return res.json(product);
    }
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let { id } = req.params;
    let product = await Product.findByIdAndDelete(id);
    let currentImage = `${config.rootPath}/public/images/products/${product.image_url}`;
    if (fs.existsSync(currentImage)) {
      fs.unlinkSync(currentImage);
    }
    return res.json(product);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { store, index, update, destroy };
