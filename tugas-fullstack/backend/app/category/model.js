const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    min: [3, "Panjang nama kategori minimal 3 karakter"],
    max: [20, "Panjang nama kategori minimal 20 karakter"],
    required: [true, "Nama kategori harus diisi"],
  },
});

module.exports = model("Category", CategorySchema);
