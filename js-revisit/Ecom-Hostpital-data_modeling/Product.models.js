import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  description: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  price:{
    type: Number,
    required:0,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  }
  
},{timestamps: true});

export const Product = mongoose.model("Product", productSchema);
