import mongoose from "mongoose";

const indianCuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String], // Assuming instructions field based on previous discussion
    required: true,
  },
  photo1: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("indianCuisine", indianCuisineSchema);
