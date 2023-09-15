const { Schema, model } = require("mongoose");

const tagSchema = Schema({
  name: {
    type: String,
    minLength: [3, "minimal 3 karakter"],
    maxLength: [20, "maksimal 20 karakter"],
    required: [true, "Nama tag harus diisi"],
  },
});

module.exports = model("Tag", tagSchema);
