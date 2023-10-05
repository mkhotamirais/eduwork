const { police_check } = require("../mw.js");
const { store, index, update, destroy } = require("./controller.js");

const router = require("express").Router();

router.post(
  "/delivery-addresses",
  police_check("create", "deliveryAddress"),
  store
);
router.get(
  "/delivery-addresses",
  police_check("view", "deliveryAddress"),
  index
);
router.put(
  "/delivery-addresses/:id",
  police_check("update", "deliveryAddress"),
  update
);
router.delete(
  "/delivery-addresses/:id",
  police_check("delete", "deliveryAddress"),
  destroy
);

module.exports = router;
