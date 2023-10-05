const router = require("express").Router();
const {
  localStrategy,
  logout,
  me,
  index,
  register,
  login,
} = require("./controller.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, localStrategy));
router.get("/admin/users", index);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", me);

module.exports = router;
