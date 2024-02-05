const mongoose = require("mongoose");
const userShema = new mongoose.Schema(
  {
    firstName: { type: String,trim:true  },

    lastName: { type: String,trim:true },

    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
    },

    phoneNumber: { type: Number, unique: true },
    
    address: {
      locality: { type: String },
      city: { type: String },
      state: { type: String },
      pincode: { type: Number },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("userCollection", userShema);
