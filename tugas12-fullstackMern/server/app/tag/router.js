const router = require("express").Router();
const { GetTags, AddTags, UpdateTags, DeleteTags } = require("./controllers");

// const { GetTags, AddTags, UpdateTags, DeleteTags } = require("./controller");
// const { police_check } = require("../mw");

router.get("/", GetTags);
router.post("/", AddTags);
router.put("/:id", UpdateTags);
router.delete("/:id", DeleteTags);
// router.post("/", police_check("create", "Tag"), AddTags);
// router.put("/:id", police_check("update", "Tag"), UpdateTags);
// router.delete("/:id", police_check("delete", "Tag"), DeleteTags);

module.exports = router;
