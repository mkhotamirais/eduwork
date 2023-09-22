const User = require("./model");

const index = async (req, res, next) => {
  res.json({ msg: req.user });
  //   try {
  //     let user = await User.find();
  //     return res.json({ msg: "Get all category", data:  });
  //   } catch (err) {
  //     if (err && err.name == "ValidationError") {
  //       return res.json({
  //         error: 1,
  //         message: err.message,
  //         fields: err.errors,
  //       });
  //     }
  //     next(err);
  //   }
};

module.exports = { index };
