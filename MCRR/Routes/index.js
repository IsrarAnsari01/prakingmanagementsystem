/* eslint-disable */
module.exports.indexRouting = (app) => {
  app.use("/api/user", require("./user.route"));
  app.use("/api/slot", require("./parkingSlot.route"));
  app.get("*", (req, res) => {
    res.send("<h2> Welcome to Repo Server</h2>");
  });
};
