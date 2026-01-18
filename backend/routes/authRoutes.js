const express = require("express");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

/* ================= AUTH ROUTES ================= */

// Signup (Create Account)
router.post("/signup", signup);

// Login
router.post("/login", login);

// Forgot Password (Send reset link)
router.post("/forgot-password", forgotPassword);

// Reset Password (Using token)
router.post("/reset-password/:token", resetPassword);

module.exports = router;
