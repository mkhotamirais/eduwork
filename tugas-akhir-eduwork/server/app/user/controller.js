const Users = require("./model.js");
const { handleErr, getToken } = require("../utils.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { sercretKey } = require("../../config/config.js");

// Admin
const GetUsers = async (req, res, next) => {
  try {
    let count = await Users.find().countDocuments();
    let users = await Users.find().select("-password -createdAt -updatedAt -__v");
    return res.json({ count, users });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

// Auth
const Register = async (req, res, next) => {
  try {
    let payload = req.body;
    let users = await Users.find();
    const ids = [];
    users.map((user) => ids.push(user.customer_id));
    const maxId = Math.max(...ids);
    users.length > 0 ? (payload = { ...payload, customer_id: maxId + 1 }) : (payload = { ...payload, customer_id: 1 });
    let user = await Users.create(payload);
    return res.json(user);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const localStrategy = async (email, password, done) => {
  try {
    let user = await Users.findOne({ email }).select(`-__v -createdAt -updatedAt -token`);
    if (!user) return done();
    if (bcrypt.compareSync(password, user.password)) {
      ({ password, ...userWithoutPassword } = user.toJSON());
      return done(null, userWithoutPassword);
    }
  } catch (err) {
    done(err, null);
  }
  done();
};

const Login = (req, res, next) => {
  passport.authenticate("local", async function (err, user) {
    if (err) return next(err);
    if (!user) return res.json({ error: 1, message: "Email or password incorrect" });
    let signed = jwt.sign(user, sercretKey);
    await Users.findByIdAndUpdate(user._id, { $push: { token: signed } });
    res.json({ user, signed });
  })(req, res, next);
};

const Logout = async (req, res, next) => {
  let token = getToken(req);
  let user = await Users.findOneAndUpdate(
    { token: { $in: [token] } },
    { $pull: { token: token } },
    { useFindAndModify: false }
  );
  if (!token || !user) res.json({ error: 1, message: "No User Found" });
  return res.json({ error: 0, message: "Logout berhasil" });
};

const Me = (req, res, next) => {
  if (!req.user) res.json({ err: 1, message: "You are not login or token expired" });
  res.json(req.user);
};

module.exports = { GetUsers, Register, localStrategy, Login, Logout, Me };
