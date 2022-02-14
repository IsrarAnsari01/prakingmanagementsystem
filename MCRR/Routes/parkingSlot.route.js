/* eslint-disable */

const express = require("express");
const router = express.Router();
const controller = require("../Controllers/parkingSlots.controller");
const validation = require("../../jwt/validateUser");

router.post(
  "/add",
  validation.validateUser(["admin"]),
  controller.addParkingBlock
);
router.put(
  "/:id",
  validation.validateUser(["admin"]),
  controller.updateParkingBlock
);
router.delete(
  "/:id",
  validation.validateUser(["admin"]),
  controller.deleteParkingBlock
);
module.exports = router;
