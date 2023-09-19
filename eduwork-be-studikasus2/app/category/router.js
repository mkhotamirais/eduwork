const { index, destroy, update, store } = require("./controller");

const router = require("express").Router();

router.get("/categories", index);
router.post("/categories", store);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
