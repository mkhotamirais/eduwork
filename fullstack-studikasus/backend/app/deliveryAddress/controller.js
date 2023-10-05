const { policyfor, handleErr } = require("../utils.js");
const DeliveryAddress = require("./model.js");
const { subject } = require("@casl/ability");

const index = async (req, res, next) => {
  try {
    // let user = req.user;
    // let address = null;
    // if (user.role == "admin") {
    //   address = await DeliveryAddress.find();
    // } else {
    //   address = await DeliveryAddress.find({ user: user._id });
    // }
    let { skip = 0, limit = 3 } = req.query;
    let count = await DeliveryAddress.find({
      user: req.user._id,
    }).countDocuments();
    let address = await DeliveryAddress.find({ user: req.user._id })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .sort("-createdAt");
    return res.json({
      msg: "Get DeliveryAddress",
      count,
      data: address,
    });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const store = async (req, res, next) => {
  try {
    let payload = req.body;
    let user = req.user;
    payload = { ...payload, user: user._id };
    let address = new DeliveryAddress(payload);
    await address.save();
    return res.json({ msg: "Create delivery address success", data: address });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let { _id, ...payload } = req.body;
    let address = await DeliveryAddress.findById(req.params.id);
    let subjectAddress = subject("deliveryAddress", {
      ...address,
      user_id: address.user,
    });
    let policy = policyfor(req.user);
    if (!policy.can("update", subjectAddress)) {
      return res.json({
        error: 1,
        message: "You are not allowed to modify this resource",
      });
    }
    address = await DeliveryAddress.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });
    return res.json({ msg: "Update delivery address success", data: address });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let address = await DeliveryAddress.findById(req.params.id);
    let subjectAddress = subject("deliveryAddress", {
      ...address,
      user_id: address.user,
    });
    let policy = policyfor(req.user);
    if (!policy.can("delete", subjectAddress)) {
      return res.json({
        error: 1,
        message: "You are not allowed to modify this resource",
      });
    }
    address = await DeliveryAddress.findByIdAndDelete(req.params.id);
    res.json({ msg: "Delete address success", data: address });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { index, store, update, destroy };
