import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  stock: Number,
  status: Boolean,
  image: String,
});

const Products = model("productsMongoose", ProductSchema);

export default Products;
