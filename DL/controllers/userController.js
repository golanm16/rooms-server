import userModel from "../models/user";

const create = async (user) => {
  return await userModel.create(user);
};
const read = async (id) => {
  return await userModel.findById(id);
};
const update = async (user, id) => {
  return await userModel.findByIdAndUpdate(id, ...user);
};
const del = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

module.exports = { create, read, update, del };
