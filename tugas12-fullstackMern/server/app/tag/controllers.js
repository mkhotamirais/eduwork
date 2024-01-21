const { handleErr } = require("../utils.js");
const Tag = require("./model.js");

const GetTags = async (req, res, next) => {
  try {
    let count = await Tag.find().countDocuments();
    let tag = await Tag.find();
    return res.json({ count, tag });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const AddTags = async (req, res, next) => {
  try {
    let tag = await Tag.create(req.body);
    return res.json(tag);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const DeleteTags = async (req, res, next) => {
  try {
    let tag = await Tag.findByIdAndDelete(req.params.id);
    return res.json(tag);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const UpdateTags = async (req, res, next) => {
  try {
    let tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    return res.json(tag);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { GetTags, UpdateTags, AddTags, DeleteTags };
