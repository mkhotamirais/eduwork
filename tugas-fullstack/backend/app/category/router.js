const router = require("express").Router();
const { police_check } = require("../mw");
const { index, store, update, destroy } = require("./controller.js");

router.get("/categories", index);
router.post("/categories", police_check("create", "Category"), store);
router.put("/categories/:id", police_check("update", "Category"), update);
router.delete("/categories/:id", police_check("delete", "Category"), destroy);

module.exports = router;
