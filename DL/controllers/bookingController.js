import bookingModel from "../models/booking";

const create = async (booking) => {
  return await bookingModel.create(booking);
};
const read = async (id) => {
  return await bookingModel.findById(id);
};
const update = async (booking, id) => {
  return await bookingModel.findByIdAndUpdate(id, ...booking);
};
const del = async (id) => {
  return await bookingModel.findByIdAndDelete(id);
};

module.exports = { create, read, update, del };
