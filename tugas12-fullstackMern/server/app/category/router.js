const router = require("express").Router();
const { GetCategories, AddCategory, UpdateCategory, DeleteCategory } = require("./controllers");

const { police_check } = require("../mw");

router.get("/", GetCategories);
router.post("/", police_check("create", "Category"), AddCategory);
router.put("/:id", police_check("update", "Category"), UpdateCategory);
router.delete("/:id", police_check("delete", "Category"), DeleteCategory);

module.exports = router;
