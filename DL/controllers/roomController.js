import roomModel from "../models/room";

const create = async (room) => {
  return await roomModel.create(room);
};
const read = async (id) => {
  return await roomModel.findById(id);
};
const update = async (room, id) => {
  return await roomModel.findByIdAndUpdate(id, ...room);
};
const del = async (id) => {
  return await roomModel.findByIdAndDelete(id);
};

module.exports = { create, read, update, del };
