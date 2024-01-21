const { model, Schema } = require("mongoose");

const CartSchema = new Schema({
  name: {
    type: String,
    min: [5, "Panjang nama makanan niminal 50 karakter"],
    required: [true, "Nama makanan harus diisi"],
  },
  qty: {
    type: Number,
    requierd: [true, "qty harus diisi"],
    min: [1, "Minimal qty adalah 1"],
    default: 1,
  },
  price: {
    type: Number,
    default: 0,
  },
  image: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

module.exports = model("Cart", CartSchema);
