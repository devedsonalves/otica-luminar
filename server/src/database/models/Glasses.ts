import mongoose, { Schema } from "mongoose";

const GlassesModel = new Schema({
  name: String,
  market: String,
  type: String,
  price: Number,
  stock: Number,
  images: Array<String>,
  tags: Array<String>,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Glasses = mongoose.model("glasses", GlassesModel)

export default Glasses