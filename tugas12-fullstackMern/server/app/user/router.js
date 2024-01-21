const { police_check } = require("../mw");
const { GetUsers, Register, Login, localStrategy, Logout, Me } = require("./controllers");
const router = require("express").Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, localStrategy));

router.get("/users", police_check("view", "Users"), GetUsers);
// router.get("/users", GetUsers);
router.post("/register", Register);
router.post("/login", Login);
router.delete("/logout", Logout);
router.get("/me", Me);

module.exports = router;
