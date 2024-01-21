const { handleErr } = require("../utils.js");
const Categories = require("./model.js");

const GetCategories = async (req, res, next) => {
  try {
    let count = await Categories.find().countDocuments();
    let category = await Categories.find();
    return res.json({ count, category });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const AddCategory = async (req, res, next) => {
  try {
    let category = await Categories.create(req.body);
    return res.json(category);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const DeleteCategory = async (req, res, next) => {
  try {
    let category = await Categories.findByIdAndDelete(req.params.id);
    return res.json(category);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const UpdateCategory = async (req, res, next) => {
  try {
    let category = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    return res.json(category);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { GetCategories, AddCategory, DeleteCategory, UpdateCategory };
