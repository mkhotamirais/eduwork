const { police_check } = require("../mw");
const { store, index, update, destroy } = require("./controller");

const router = require("express").Router();

router.post(
  "/delivery-addresses",
  //   police_check("create", "DeliveryAddress"),
  store
);
router.get("/delivery-addresses", index);
router.put("/delivery-addresses", update);
router.delete("/delivery-addresses", destroy);

module.exports = router;
