const { police_check } = require("../mw");
const { index, destroy, update, store } = require("./controller");

const router = require("express").Router();

router.get("/tags", index);
router.post("/tags", police_check("create", "Tag"), store);
router.put("/tags/:id", police_check("update", "Tag"), update);
router.delete("/tags/:id", police_check("delete", "Tag"), destroy);

module.exports = router;
