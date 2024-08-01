import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AlbumSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
  releaseDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model("Album", AlbumSchema);
