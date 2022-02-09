const express = require("express");
// const { grantAccess } = require("../jwt/verification");
const router = express.Router();
const controller = require("../Controller/user.controller");

router.post("/add", controller.saveUser);
module.exports = router;
