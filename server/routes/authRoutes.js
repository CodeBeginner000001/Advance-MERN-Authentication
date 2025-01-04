const express = require("express");
const router = express.Router();
const {signup,login,logout,verifyEmail,forgetpassword,resetpassword,checkAuth} = require("../controllers/auth");
const {verifyToken} = require("../middleware/verifyToken")
router.post("/signup", signup);
router.post("/login",login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail)
router.post("/forget-password",forgetpassword)
router.post("/reset-password/:token",resetpassword)
router.get("/check-auth",verifyToken,checkAuth)

// Correct export statement 
module.exports = router;