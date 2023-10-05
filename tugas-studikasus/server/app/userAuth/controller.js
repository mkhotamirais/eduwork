const User = require("./model.js");
const { getToken, handleErr } = require("../utils.js");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../../config/config.js");

// Admin
const index = async (req, res, next) => {
  try {
    let count = await User.find().countDocuments();
    let users = await User.find();
    return res.json({ count, users });
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

// Auth
const register = async (req, res, next) => {
  try {
    let payload = req.body;
    let user = new User(payload);
    await user.save();
    return res.json(user);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const localStrategy = async (email, password, done) => {
  try {
    let user = await User.findOne({ email }).select(
      `-__v -createdAt -updatedAt -cart_items -token`
    );
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

const login = (req, res, next) => {
  passport.authenticate("local", async function (err, user) {
    if (err) return next(err);
    if (!user)
      return res.json({ error: 1, message: "Email or password incorrect" });
    let signed = jwt.sign(user, config.sercretKey);
    await User.findByIdAndUpdate(user._id, { $push: { token: signed } });
    res.json({ user, signed });
  })(req, res, next);
};

const logout = async (req, res, next) => {
  let token = getToken(req);
  let user = await User.findOneAndUpdate(
    { token: { $in: [token] } },
    { $pull: { token: token } },
    { useFindAndModify: false }
  );
  if (!token || !user) {
    res.json({
      error: 1,
      message: "No User Found",
    });
  }
  return res.json({
    error: 0,
    message: "Logout berhasil",
  });
};

const me = (req, res, next) => {
  if (!req.user) {
    res.json({
      err: 1,
      message: "You are not login or token expired",
    });
  }
  res.json(req.user);
};

module.exports = { index, register, localStrategy, login, logout, me };