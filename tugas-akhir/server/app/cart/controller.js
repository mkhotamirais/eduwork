const Product = require("../product/model.js");
const Carts = require("./model.js");

const UpdateCart = async (req, res, next) => {
  try {
    const { items } = req.body;
    const productIds = items.map((item) => item.product._id);
    const products = await Product.find({ _id: { $id: productIds } });
    let cartItems = items.map((item) => {
      let relatedProduct = products.find((product) => product._id.toString() === item.product._id);
      return {
        product: relatedProduct._id,
        price: relatedProduct.price,
        image_url: relatedProduct.image_url,
        name: relatedProduct.name,
        user: req.user._id,
        qty: item.qty,
      };
    });
    await Carts.deleteMany({ user: req.user._id });
    await Carts.bulkWrite(
      cartItems.map((item) => {
        return {
          updateOne: {
            filter: {
              user: req.user._id,
              product: item.product,
            },
            update: item,
            upsert: true,
          },
        };
      })
    );
    return res.json(cartItems);
  } catch (err) {
    if (err && err.name == "ValidationError") {
      return res.json({ error: 1, message: err.message, fields: err.errors });
    }
    next(err);
  }
};

const GetCarts = async (req, res, next) => {
  try {
    let cart = await Carts.find({ user: req.user._id }).populate("product");
    return res.json(cart);
  } catch (error) {
    if (err && err.name == "ValidationError") {
      return res.json({ error: 1, message: err.message, fields: err.errors });
    }
    next(err);
  }
};

module.exports = { GetCarts, UpdateCart };
