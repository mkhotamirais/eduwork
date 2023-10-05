const { police_check } = require("../mw.js");
const { update, index } = require("./controller.js");

const router = require("express").Router();

router.put("/carts", police_check("update", "Cart"), update);
router.get("/carts", police_check("read", "Cart"), index);

module.exports = router;
