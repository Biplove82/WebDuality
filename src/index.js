
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

const router = require("./routes/routes");

app.use("/v1", router);

mongoose
  .connect( "mongodb+srv://webduality:WNRsDx3qZ6hKlFLI@cluster0.3brqj7o.mongodb.net/user?retryWrites=true&w=majority",{
    })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app running on port " + (process.env.PORT || 3000));
  });
  
