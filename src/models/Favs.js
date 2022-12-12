import mongoose from "mongoose";

const favSchema = new mongoose.Schema({
  isbn: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  cover: { type: String },
  pubDate: { type: String },
  publisher: { type: String },
  createdAt: Date,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const favModel = mongoose.model("Favs", favSchema);
export default favModel;
