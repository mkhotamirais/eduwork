const { handleErr } = require("../utils.js");
const Category = require("./model.js");

const index = async (req, res, next) => {
  try {
    let count = await Category.find().countDocuments();
    let category = await Category.find();
    return res.json({ count, category });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const store = async (req, res, next) => {
  try {
    let category = new Category(req.body);
    await category.save();
    return res.json({ message: "add category success", category });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let category = await Category.findByIdAndDelete(req.params.id);
    !category ? res.send({ message: "no data found" }) : null;
    return res.json({ message: "delete category success", category });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    !category ? res.send({ message: "no data found" }) : null;
    return res.json({ message: "update category success", category });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { index, store, update, destroy };
