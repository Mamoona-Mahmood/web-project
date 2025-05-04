

const express = require("express");

const {
    loginController,
    authController
  } = require("../controllers/userCtrl");
  const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);