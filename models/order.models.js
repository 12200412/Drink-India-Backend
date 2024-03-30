import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Plan"
  }
}, { timestamps: true })
