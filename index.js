const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//Imports Routes
const postRoute = require("./posts");

const bodyparser = require("body-parser");
require("dotenv/config");

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use("/posts", postRoute);

app.get("/", cors(), (req, res) => {
  res.send("We are on Home");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlPraser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to the DB");
  }
);
//Listening to the server
app.listen(3001);
