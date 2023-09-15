const { Schema } = require("mongoose");

let userSchema = Schema(
  {
    full_name: {
      type: String,
      required: [true, "Nama harus diisi"],
      maxlength: [255, "Panjang nama harus antara 3-255 karakter"],
      minlength: [3, "Panjang nama harus antara 3-255 karakter"],
    },
    customer_id: {
      type: Number,
    },
    email: {
      type: String,
      required: [true, "Email harus diisi"],
      maxlength: [255, "Panjang email maksimal 255 karakter"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      maxlength: [255, "Panjang password maksimal 255 karakter"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    token: [String],
  },
  { timestamps: true }
);

userSchema.path("email").validate(
  function (value) {
    const EMAIL_RE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return EMAIL_RE.text(value);
  },
  (attr) => `${attr.value} harus merupakan email yang valid`
);

userSchema.path("email").validate(
  async function (value) {
    try {
      // 1 lakukan pencarian ke _collection_ user berdasarkan email
      const count = await this.model("User").count({ email: value });
      // kode ini mengidentifikasikan bahwa jika user ditemukan akan mengembalikan 'false' jika tidak ditemukan 'true'
      // jika 'false' maka validasi gagal
      // jika 'true' maka validasi berhasil
      return !count;
    } catch (error) {
      throw err;
    }
  },
  (attr) => `${attr.value} sudah terdaftar`
);

module.exports = model("User", userSchema);
