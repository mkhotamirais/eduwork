const { getToken, policyfor } = require("./utils.js");
const jwt = require("jsonwebtoken");
const Users = require("./user/model.js");
const { sercretKey } = require("../config/config.js");

function decodeToken() {
  return async function (req, res, next) {
    try {
      let token = getToken(req);
      if (!token) return next();
      req.user = jwt.verify(token, sercretKey);
      let user = await Users.findOne({ token: { $in: [token] } });
      if (!user) return res.json({ error: 1, message: "Token Expired" });
    } catch (err) {
      if (err && err.name === "JsonWebTokenError") return res.json({ error: 1, message: err.message });
      next(err);
    }
    return next();
  };
}

function police_check(action, subject) {
  return function (req, res, next) {
    let policy = policyfor(req.user);
    if (!policy.can(action, subject)) {
      return res.json({ error: 1, message: `You are not allowed to ${action} ${subject}` });
    }
    next();
  };
}

module.exports = { decodeToken, police_check };
