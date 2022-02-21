const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxOfPeople: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("room", roomSchema);
