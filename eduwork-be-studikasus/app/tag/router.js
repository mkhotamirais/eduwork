const express = require("express");
const router = express.Router();
const { index, store, update, destroy } = require("./controller.js");

router.get("/tags", index);
router.post("/tags", store);
router.put("/tags/:id", update);
router.delete("/tags/:id", destroy);

module.exports = router;
