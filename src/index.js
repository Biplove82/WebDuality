require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const db=process.env.MONGODB_URI



app.use(cors());

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

const router = require("./routes/routes");

app.use("/v1", router);

mongoose
  .connect( db,{
    })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });
  
