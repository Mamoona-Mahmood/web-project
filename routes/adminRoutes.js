const express = require("express");

const {
    getAllUsersController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
  
const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

module.exports = router;