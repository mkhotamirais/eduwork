const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    min: [3, "Panjang nama kategori minimal 3 karakter"],
    max: [20, "Panjang nama kategori maksimal 20 karakter"],
    require: [true, "Nama kategori harus diisi"],
  },
});

module.exports = model("Category", categorySchema);
