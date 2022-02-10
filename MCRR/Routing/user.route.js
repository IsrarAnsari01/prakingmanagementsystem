/* eslint-disable */

const express = require("express");
// const { grantAccess } = require("../jwt/verification");
const router = express.Router();
const controller = require("../Controller/user.controller");
const validation = require("../../helper/jwt/validateUser");

router.post("/add", controller.saveUser);
router.post("/login", controller.loginUser);
router.put(
  "/:id",
  validation.validateUser(["customer", "admin"]),
  controller.updateUser
);
module.exports = router;
