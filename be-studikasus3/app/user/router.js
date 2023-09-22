const { index } = require("./controller");

const router = require("express").Router();

router.get("/users", index);

module.exports = router;
