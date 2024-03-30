import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  company_name: {
    type: String,
    require: true
  },
  phone_no: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lower: true,
  },
  password: {
    type: String,
    require: true
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserAddress"
  }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)