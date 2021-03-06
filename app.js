/* eslint-disable */
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const port = 3501;
const app = express();
const connection = require("./Connection");
const index = require("./MCRR/Routes");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "40mb" }));
app.use(
  session({
    secret: "Hello From PMS",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.set("views", "./nodemailer/templates");
app.set("view engine", "ejs");

// Enqueue Routing
index.indexRouting(app);

app.listen(port, (err) => {
  if (err) {
    console.log("Error in listening at " + port);
    console.log(err);
    return;
  }
  console.log("Server Started Successfully..!");
  connection.connectWithDB();
});
