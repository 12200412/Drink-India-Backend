import mongoose from "mongoose";

const deliveryAddressShema = new mongoose.Schema({
  address: {
    type: String,
    require: true
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

export const DeliveryAddress = mongoose.model("DeliveryAddress", deliveryAddressShema)