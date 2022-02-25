/* eslint-disable */

const express = require("express");
const router = express.Router();
const controller = require("../Controllers/user.controller");
const validation = require("../../jwt/validateUser");

router.post("/add", controller.saveUser);
router.post("/login", controller.loginUser);
router.post("/refreshtoken", controller.refreshToken);

router.put(
  "/:id",
  validation.validateUser(["customer", "admin"]),
  controller.updateUser
);

router.get(
  "/samecityparking/:cityname",
  validation.validateUser(["customer", "admin"]),
  controller.sameCityParking
);
router.post(
  "/nearestparking",
  validation.validateUser(["customer", "admin"]),
  controller.nearestParking
);

module.exports = router;
