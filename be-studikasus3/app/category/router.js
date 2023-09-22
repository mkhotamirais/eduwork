const { police_check } = require("../mw");
const { index, update, store, destroy } = require("./controller");

const router = require("express").Router();

router.get("/categories", index);
router.post("/categories", police_check("create", "Category"), store);
router.put("/categories/:id", police_check("update", "Category"), update);
router.delete("/categories/:id", police_check("delete", "Category"), destroy);

module.exports = router;
