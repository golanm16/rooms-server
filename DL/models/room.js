const mongoose = require("mongoose");

require("../db").connect();

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

const test = {
  name: "test",
  maxOfPeople: 10,
  value: 253,
};
roomModel.create();
