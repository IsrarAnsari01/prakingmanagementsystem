/* eslint-disable */

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
module.exports.connectWithDB = () => {
  mongoose.connect(process.env.DATABASE_CONNECTION_CREDENTIALS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.once("error", (err) => {
    console.log("Error in connecting to DB");
    console.log(err);
  });

  db.once("open", () => {
    console.log("Connected to DB successfully..!");
  });
};
