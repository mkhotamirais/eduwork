const router = require("express").Router();
const { localStrategy, register, logout, me, index, login } = require("./controller.js");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { police_check } = require("../mw.js");

passport.use(new LocalStrategy({ usernameField: "email" }, localStrategy));
router.get("/admin/users", police_check("view", "Users"), index);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", me);

module.exports = router;
