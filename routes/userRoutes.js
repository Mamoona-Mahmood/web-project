

const express = require("express");

const {
    loginController,
    registerController,
    applyDoctorController,
    getAllNotificationController,
    deleteAllNotificationController,
    getAllDocotrsController,
    authController
  } = require("../controllers/userCtrl");
  const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
console.log("Router", "Hello")
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;