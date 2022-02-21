const userModel = require("../models/user");

const create = async (user) => {
  return await userModel.create(user);
};
const read = async (id) => {
  return await userModel.findById(id);
};
const readAll = async () => {
  return await userModel.find();
};
const update = async (user, id) => {
  console.log(user);
  return await userModel.findByIdAndUpdate(id, user);
};
const del = async (id) => {
  return await userModel.findByIdAndUpdate(id, { active: false });
};

module.exports = { create, read, update, del, readAll };
