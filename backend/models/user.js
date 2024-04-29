const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    image: { type: String },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    followers: [{ type: mongoose.Schema.Types.ObjectId }],
    followings: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  { timeStamp: true }
);

module.exports = mongoose.model("User", User);
