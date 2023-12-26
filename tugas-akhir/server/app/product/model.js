const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      min: [3, "Panjang nama makanan minimal 3 karakter"],
      required: [true, "Nama makanan harus diisi"],
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      min: [1000, "Panjang deskripsi maksimal 1000 karakter"],
    },
    image: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Product", ProductSchema);
