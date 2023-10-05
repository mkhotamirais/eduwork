const mongoose = require("mongoose");

const deliveryAddressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama alamat harus diisi"],
      max: [255, "Panjang maksimal nama alamat 255 karakter"],
    },
    kelurahan: {
      type: String,
      required: [true, "Kelurahan harus diisi"],
      max: [255, "Panjang maksimal kelurahan 255 karakter"],
    },
    kecamatan: {
      type: String,
      required: [true, "Kecamatan harus diisi"],
      max: [255, "Panjang maksimal kecamatan 255 karakter"],
    },
    kabupaten: {
      type: String,
      required: [true, "Kabupaten harus diisi"],
      max: [255, "Panjang maksimal kabupaten 255 karakter"],
    },
    provinsi: {
      type: String,
      required: [true, "Provinsi harus diisi"],
      max: [255, "Panjang maksimal provinsi 255 karakter"],
    },
    detail: {
      type: String,
      required: [true, "Detail alamat harus diisi"],
      max: [255, "Panjang maksimal detail alamat 255 karakter"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("deliveryAddress", deliveryAddressSchema);
