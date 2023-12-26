const router = require("express").Router();
const { police_check } = require("../mw.js");
const { AddAddress, GetAddresses, DeleteAddress, UpdateAddress, GetSingleAddress } = require("./controller.js");

router.post("/", police_check("create", "deliveryAddress"), AddAddress);
router.get("/", police_check("view", "deliveryAddress"), GetAddresses);
router.get("/:id", police_check("view", "deliveryAddress"), GetSingleAddress);
router.put("/:id", police_check("update", "deliveryAddress"), UpdateAddress);
router.delete("/:id", police_check("delete", "deliveryAddress"), DeleteAddress);

module.exports = router;
