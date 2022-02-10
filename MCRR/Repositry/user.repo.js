/* eslint-disable */
const userModel = require("../Models/user.model");
module.exports = class userRepo {
  async saveUser(userDetails) {
    const newUser = new userModel.user(userDetails);
    return await newUser.save();
  }

  async loginUser(userDetails) {
    return await userModel.user.findOne({ email: userDetails.email }).exec();
  }

  async deleteUser(id) {
    return await userModel.user.findOneAndDelete({ _id: id });
  }

  async updateUser(id, user) {
    return await userModel.user.updateOne({ _id: id }, user);
  }

  async singleUser(condition) {
    return await userModel.user.findOne(condition);
  }
};
