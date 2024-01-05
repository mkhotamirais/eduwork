const Products = require("../product/model.js");
const { handleErr } = require("../utils.js");
const Carts = require("./model.js");

const AddToCart = async (req, res, next) => {
  try {
    const { id } = req.body;
    const product = await Products.findById(id);
    let newCart;
    let data = {
      name: product.name,
      image: product.image,
      price: product.price,
      qty: 1,
      user: req.user._id,
      productId: product._id,
    };
    const carts = await Carts.find();

    if (carts.find((cart) => cart.productId.valueOf() === id)) {
      carts.map((cart) => {
        if (cart.productId.valueOf() === id) {
          data.qty = cart.qty + 1;
          data.price = product.price * data.qty;
        }
      });
      newCart = await Carts.findOneAndUpdate({ productId: id }, data, { new: true });
    } else {
      newCart = await Carts.create(data);
    }
    res.json(newCart);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const UpdateCart = async (req, res, next) => {
  try {
    const { items } = req.body;
    const productIds = items.map((item) => item.productId);
    const products = await Products.find({ _id: { $in: productIds } });
    let cartItems = items.map((item) => {
      let relatedProduct = products.find((product) => product._id.toString() === item.productId);
      return {
        product: relatedProduct._id,
        price: relatedProduct.price,
        image: relatedProduct.image,
        name: relatedProduct.name,
        user: req.user._id,
        qty: item.qty,
      };
    });
    await Carts.deleteMany({ user: req.user._id });
    // await Carts.bulkWrite(
    //   cartItems.map((item) => {
    //     return {
    //       updateOne: {
    //         filter: {
    //           user: req.user._id,
    //           product: item.productId,
    //         },
    //         update: item,
    //         upsert: true,
    //       },
    //     };
    //   })
    // );
    return res.json(cartItems);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

// const GetCarts = async (req, res, next) => {
//   try {
//     console.log(req.user);
//     let cart = await Carts.find({ user: req.user._id }).populate("product");
//     console.log(cart);
//     return res.json(cart);
//   } catch (err) {
//     handleErr(err, res);
//     next(err);
//   }
// };

const GetCarts = async (req, res, next) => {
  try {
    const carts = await Carts.find();
    res.json(carts);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

const GetCartsQty = async (req, res, next) => {
  const carts = await Carts.find();
  const totalQty = carts.reduce(function (a, b) {
    return a + b.qty;
  }, 0);
  res.json(totalQty);
};

const DecQty = async (req, res, next) => {
  const { id } = req.body;
  const cart = await Carts.findOne({ productId: id });
  const product = await Products.findById(id);
  cart.qty = cart.qty - 1;
  cart.price = product.price * cart.qty;
  const newCart = await Carts.findOneAndUpdate({ productId: id }, cart);
  res.json(newCart);
};

const DeleteCart = async (req, res, next) => {
  try {
    const cart = await Carts.findByIdAndDelete(req.params.id);
    return res.json(cart);
  } catch (err) {
    handleErr(err, res);
    next(err);
  }
};

module.exports = { GetCarts, UpdateCart, AddToCart, GetCartsQty, DecQty, DeleteCart };
