const mongoose = require("mongoose");

const creditsSchema = new mongoose.Schema({
  monthly: { type: Number },
  currentMonth: { type: Number },
  nextMonth: { type: Number },
  left: { type: Number },
});

module.exports = mongoose.model("credits", creditsSchema);
