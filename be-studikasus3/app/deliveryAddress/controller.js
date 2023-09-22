const { policyfor } = require("../utils.js");
const DeliveryAddress = require("./model.js");
const {subject} = require("@casl/ability")

const index = async (req, res, next) => {
  try {
    let address = await DeliveryAddress.find();
    return res.json({
      msg: "Get all DeliveryAddress",
      data: address,
    });
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
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
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    let (_id, ...payload) = req.body
    let address = await DeliveryAddress.findById(req.params.id)
    let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user})
    let policy = policyfor(req.user)
    if(!policy.can('update', subjectAddress)){
      return res.json({
        error: 1,
        message: 'You are not allowed to modify this resource'
      })
    }
    address = await DeliveryAddress.findByIdAndUpdate(
      req.params.id,
      payload,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json({ msg: "Update delivery address success", data: address });
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    let address = await DeliveryAddress.findById(req.params.id)
    let subjectAddress = subject('DeliveryAddress', {...address, user_id: address.user})
    let policy = policyfor(req.user)
    if(!policy.can('update', subjectAddress)){
      return res.json({
        error: 1,
        message: 'You are not allowed to modify this resource'
      })
    }
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

module.exports = { index, store, update, destroy };
