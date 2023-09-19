const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const tagSchema = new Schema({
  name: {
    type: String,
    min: [3, "Panjang nama tag minimal 3 karakter"],
    max: [20, "Panjang nama tag maksimal 20 karakter"],
    require: [true, "Nama tag harus diisi"],
  },
});

module.exports = model("Tag", tagSchema);
