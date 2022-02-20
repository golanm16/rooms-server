const mongoose = require("mongoose");

const payedBySchema = new mongoose.Schema({
  monthly: { type: Number },
  creditCard: { type: Number },
  purchase: { type: Number },
});

module.exports = mongoose.model("payedBy", payedBySchema);
