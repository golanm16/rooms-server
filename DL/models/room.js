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
});

const roomModel = mongoose.model("room", roomSchema);

module.exports = roomModel;
// const test = {
//   name: "test",
//   maxOfPeople: 10,
//   value: 253,
// };

// roomModel.create(test);
