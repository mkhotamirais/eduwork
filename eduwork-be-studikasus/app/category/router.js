const express = require("express");
const router = express.Router();
const { index, store, update, destroy } = require("./controller.js");

router.get("/categories", index);
router.post("/categories", store);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
