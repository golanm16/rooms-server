const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  isManager: { type: Boolean },
  registerDate: { type: Date, default: Date.now() },
  isSubscribed: { type: Boolean },
  isRegistered: { type: Boolean },
  credits: { type: Object },
});

module.exports = mongoose.model("user", userSchema);
