const User = require("../models/user");
const token = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const userExist = await User.findOne({ $or: [{ email }, { userName }] });
    if (userExist) {
      res.status(500).json("Username or email already exist!");
    } else {
      const hashPassword = await bcrypt.hash(password, 1);
      const user = await User.create({ ...req.body, password: hashPassword });
      res.status(201).json(token(user._id));
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { userName }] });
    const comparePassword = await bcrypt.compare(password, user.password);
    if (user && comparePassword) {
      res.status(200).json(token(user._id));
    } else {
      res.status(500).json("Invalid credentials!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const followUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: req.user });
    if (user.followings.includes(id)) {
      await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { followings: id } }
      );
      await User.findOneAndUpdate(
        { _id: id },
        { $pull: { followers: user._id } }
      );
      res.status(200).json("Follow removed!");
    } else {
      await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { followings: id } }
      );
      await User.findOneAndUpdate(
        { _id: id },
        { $push: { followers: user._id } }
      );
      res.status(200).json("Follow added!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const users = await User.find({ _id: { $ne: req.user } })
      .skip((page - 1) * 10)
      .limit(10);
    res.status(200).json({ users, count: User.length - 1 });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user }).select(
      "userName image followings"
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, followUser, getAllUsers, getUser };
