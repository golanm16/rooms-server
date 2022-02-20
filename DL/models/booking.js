const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: { type: Date },
  startTime: { type: String, required: true },
  finishTime: { type: String, required: true },
  roomId: { type: mongoose.Types.ObjectId, ref: "room" },
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  logDate: { type: Date },
  payMethod: { type: mongoose.Types.ObjectId, ref: "payMethod" },
  calendarInviteLink: { type: String },
  cost: { type: Number },
  payedBy: { type: Object },
});

module.exports = mongoose.model("booking", bookingSchema);
