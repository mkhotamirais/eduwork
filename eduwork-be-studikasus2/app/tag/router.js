const { index, destroy, update, store } = require("./controller");

const router = require("express").Router();

router.get("/tags", index);
router.post("/tags", store);
router.put("/tags/:id", update);
router.delete("/tags/:id", destroy);

module.exports = router;
