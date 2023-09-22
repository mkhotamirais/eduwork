const cobamw = (req, res, next) => {
  req.nama = "ahmad";
  next();
};

module.exports = { cobamw };
