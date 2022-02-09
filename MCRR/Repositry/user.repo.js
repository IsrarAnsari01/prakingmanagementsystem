/* eslint-disable */
const userModel = require("../Models/user.model");
module.exports = class userRepo {
  async saveUser(userDetails) {
    const newUser = new userModel(userDetails);
    return await newUser.save();
  }

  async loginUser(userDetails) {
    if (passwordEncryption.comparePassword(userDetails.password)) {
      return await userModel.findOne({ email: userDetails.email }).exec();
    }
    return "User Not Found";
  }

  async deleteUser(id) {
    return await userModel.findOneAndDelete({ _id: id });
  }

  async updateUser(user) {
    return await userModel.updateOne({ _id: id }, user);
  }
};
