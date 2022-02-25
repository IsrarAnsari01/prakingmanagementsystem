/* eslint-disable */
const parkingSlot = require("../Reposities/parkingSlots.repo");

module.exports.addParkingBlock = async (req, res) => {
  try {
    req.body.parkingSlot.cityName = stringFunc.capitalizeFirstLetter(
      req.body.parkingSlot.cityName
    );
    // req.body.parkingSlot.date = new Date()
    await new parkingSlot()
      .addParkingSlot(req.body.parkingSlot)
      .then((succ) => {
        res.status(200).send({ id: succ._id });
      });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};

module.exports.updateParkingBlock = async (req, res) => {
  try {
    await new parkingSlot()
      .updateUser(req.params.id, req.body.parkingSlot)
      .then((succ) => {
        res.status(200).send({ updated: true });
      });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};

module.exports.deleteParkingBlock = async (req, res) => {
  try {
    await new parkingSlot().deleteUser(req.params.id).then((succ) => {
      res.status(200).send({ deleted: true });
    });
  } catch (error) {
    res.status(500).send({ error });
  }
  return;
};
