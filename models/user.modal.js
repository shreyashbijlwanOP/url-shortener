const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const UserModal = Mongoose.model("user", userSchema);

module.exports = UserModal;
