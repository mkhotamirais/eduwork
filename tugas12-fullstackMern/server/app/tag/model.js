const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TagSchema = new Schema({
  name: {
    type: String,
    min: [3, "Panjang nama tag minimal 3 karakter"],
    max: [20, "Panjang nama tag minimal 20 karakter"],
    required: [true, "Nama tag harus diisi"],
    unique: true,
  },
});

module.exports = model("Tag", TagSchema);
