import mongoose from "mongoose";
import { type } from "os";

const { Schema, model } = mongoose;
const SongSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true },
  album: { type: Schema.Types.ObjectId, ref: "Album", required: true },
  genre: { type: String, required: true },
  duration: { type: Number, required: true }, // duration in seconds
  releaseDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});
export default model("song", SongSchema);
