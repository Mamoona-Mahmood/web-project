const userModel = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// login callback
const loginController = async (req, res) => {
  console.log("LoginController Hello", req.body);
    try {
      const user = await userModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      // const isMatch = await bcrypt.compare(req.body.password, user.password);
      // if (!isMatch) {
      //   return res
      //     .status(200)
      //     .send({ message: "Invlid EMail or Password", success: false });
      // }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30s",
      });
      res.status(200).send({ message: "Login Success", success: true, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
};

const authController = async (req, res) => {
    try {
      const user = await userModel.findById({ _id: req.body.userId });
      user.password = undefined;
      if (!user) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: user,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
};

  module.exports = {
    loginController,
    authController
  };