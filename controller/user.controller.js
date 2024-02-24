const { request } = require("express");
const UserModal = require("../models/user.modal");

const createUser = async (req, res) => {
  const { email, password, userName } = req.body;
  try {
    const u = await UserModal.create({
      email,
      password,
      userName,
    });
    return u;
  } catch (error) {
    return error;
  }
};

const getAllUser = async (req, res) => {
  const { filter } = req.query;
  try {
    const users = await UserModal.find(filter);
    return res.status(200).json({ type: "error", result: users });
  } catch (error) {
    return res.status(400).json({ type: "error", message: error });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModal.findById(id);

    if (!user._id) return res.status(200).json({ type: "error", result: user });

    return res.status(200).json({ type: "error", result: user });
  } catch (error) {
    return res.status(400).json({ type: "error", message: error });
  }
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await UserModal.findByIdAndUpdate(id, { $set: data });

    if (!user._id) return res.status(200).json({ type: "error", result: user });

    return res.status(200).json({ type: "error", result: user });
  } catch (error) {
    return res.status(400).json({ type: "error", message: error });
  }
};

module.exports = { createUser, getAllUser, getUserById, updateUserById };
