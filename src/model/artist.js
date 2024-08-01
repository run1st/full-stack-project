import mongoose from "mongoose";
const { Schema, model } = mongoose;
const ArtistSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default model("Artist", ArtistSchema);
