const { policyfor, handleErr } = require("../utils.js");
const Addresses = require("./model.js");
const { subject } = require("@casl/ability");

const GetAddresses = async (req, res, next) => {
  try {
    let user = req.user;
    let count, address;
    if (user.role === "admin") {
      count = await Addresses.find().countDocuments();
      address = await Addresses.find()
        .sort("-createdAt")
        .select("-createdAt -updatedAt -__v")
        .populate({ path: "user", select: "username" });
    } else {
      count = await Addresses.find({ user: req.user._id }).countDocuments();
      address = await Addresses.find({ user: req.user._id })
        .sort("-createdAt")
        .select("-createdAt -updatedAt -__v")
        .populate({ path: "user", select: "username" });
    }
    return res.json({ count, address });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const GetSingleAddress = async (req, res, next) => {
  try {
    const address = await Addresses.findById(req.params.id);
    return res.json(address);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const AddAddress = async (req, res, next) => {
  try {
    let payload = req.body;
    let user = req.user;
    payload = { ...payload, user: user._id };
    let address = await Addresses.create(payload);
    return res.json(address);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const UpdateAddress = async (req, res, next) => {
  try {
    let address = await Addresses.findById(req.params.id);
    let subjectAddress = subject("deliveryAddress", { ...address, user_id: address.user });
    let policy = policyfor(req.user);
    if (!policy.can("update", subjectAddress)) {
      return res.json({ error: 1, message: "You are not allowed to modify this resource" });
    }
    address = await Addresses.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    return res.json(address);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const DeleteAddress = async (req, res, next) => {
  try {
    let address = await Addresses.findById(req.params.id);
    let subjectAddress = subject("deliveryAddress", { ...address, user_id: address.user });
    let policy = policyfor(req.user);
    if (!policy.can("delete", subjectAddress)) {
      return res.json({ error: 1, message: "You are not allowed to modify this resource" });
    }
    address = await Addresses.findByIdAndDelete(req.params.id);
    res.json(address);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { GetAddresses, AddAddress, DeleteAddress, UpdateAddress, GetSingleAddress };
