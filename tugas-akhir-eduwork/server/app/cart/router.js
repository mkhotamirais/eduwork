const { police_check } = require("../mw.js");
const { GetCarts, UpdateCart, AddToCart, GetCartsQty, DecQty, DeleteCart } = require("./controller.js");

const router = require("express").Router();

router.put("/", police_check("update", "Cart"), UpdateCart);
router.get("/", police_check("read", "Cart"), GetCarts);
router.post("/", police_check("add", "Cart"), AddToCart);
router.get("/qty", GetCartsQty);
router.post("/dec", DecQty);
router.delete("/:id", police_check("delete", "Cart"), DeleteCart);

module.exports = router;
