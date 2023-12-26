const { police_check } = require("../mw.js");
const { GetCarts, UpdateCart } = require("./controller.js");

const router = require("express").Router();

router.put("/", police_check("update", "Cart"), UpdateCart);
router.get("/", police_check("read", "Cart"), GetCarts);

module.exports = router;
