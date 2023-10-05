const { handleErr } = require("../utils.js");
const Tag = require("./model.js");

const index = async (req, res, next) => {
  try {
    let tag = await Tag.find();
    return res.json({ msg: "Get all tag", data: tag });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const store = async (req, res, next) => {
  try {
    let tag = new Tag(req.body);
    await tag.save();
    return res.json({ msg: "Save tag success", data: tag });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let tag = await Tag.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Delete tag success", data: tag });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.json({ msg: "Update tag success", data: tag });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { index, store, update, destroy };
