import mongoose from "mongoose"

const planSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    require: true,
    min: 500
  },
  sharing: {
    type: String,
    enum: ["FULL", "TWO_SHARING", "THREE_SHARING", "SIX_SHARING"],
    require: true
  }
}, { timestamps: true })


export const Plan = mongoose.model("Plan", planSchema)