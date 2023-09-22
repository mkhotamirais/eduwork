const express = require("express");
const router = express.Router();
const {
  register,
  login,
  localStrategy,
  logout,
  me,
} = require("./controller.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, localStrategy));
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", me);

module.exports = router;
