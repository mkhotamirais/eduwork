const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    nama: "mkhotami",
    pesan: "berhasil",
  });
});

router.get("/dinamic/:id", (req, res) => {
  res.send({ id: req.params.id });
});

router.get("/dinamic/:nama/:umur", (req, res) => {
  const { nama, umur } = req.params;
  res.send({ nama, umur });
});

router.post("/product/", (req, res) => {
  res.json({
    id: req.params.id,
  });
});

router.get("/string", (req, res) => {
  const { nama, umur } = req.query;
  res.send({ nama, umur });
});

module.exports = router;
