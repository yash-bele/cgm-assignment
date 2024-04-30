const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  getAllUsers,
  getUser,
  followUser,
} = require("../controllers/users");
const auth = require("../utils/authMiddleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/follow/:id").get(auth, followUser);
router.route("/users").get(auth, getAllUsers);
router.route("/user").get(auth, getUser);

module.exports = router;
