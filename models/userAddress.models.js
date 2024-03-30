import mongoose from "mongoose";

const userAddressShema = new mongoose.Schema({
  address: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true
  },
  state: {
    type: String,
    require: true
  },
  zipcode: {
    type: Number,
    require: true,
    length: 6
  }
}, { timestamps: true })

export const UserAddress = mongoose.model("UserAddress", userAddressShema)