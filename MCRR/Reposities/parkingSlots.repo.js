/* eslint-disable */
const parkingSlotModel = require("../Models/parkingSlots.model");
module.exports = class parkingSlot {
  async addParkingSlot(slotDetails) {
    const parkingSlot = new parkingSlotModel.parkingSlot(slotDetails);
    return await parkingSlot.save();
  }

  async deleteUser(id) {
    return await parkingSlotModel.parkingSlot.findOneAndDelete({ _id: id });
  }

  async updateUser(id, slotDetails) {
    return await parkingSlotModel.parkingSlot.updateOne(
      { _id: id },
      slotDetails
    );
  }

  async sameCityParking(cityName) {
    return await parkingSlotModel.parkingSlot.find({ city: cityName });
  }

  async nearestParking(zipCode, cityName) {
    return await parkingSlotModel.parkingSlot.find({
      city: cityName,
      zipcode: zipCode,
    });
  }
};
