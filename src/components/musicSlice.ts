import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import allSongs from "./assets/songs";
import { SongsModel } from "./assets/songs";
interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  duration: number;
  image: string;
}
interface MusicState {
  allSongs: SongsModel[];
}
const initialState: MusicState = {
  allSongs: allSongs,
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<SongsModel>) => {
      state.allSongs.push(action.payload);
    },
    editSong: (state, action: PayloadAction<SongsModel>) => {
      const index = state.allSongs.findIndex(
        (song) => song.id === action.payload.id
      );
      if (index !== -1) {
        state.allSongs[index] = action.payload;
      }
    },
    deleteSong: (state, action: PayloadAction<SongsModel>) => {
      state.allSongs = state.allSongs.filter(
        (song) => song.id !== action.payload.id
      );
    },
  },
});
export const { addSong, editSong, deleteSong } = musicSlice.actions;
export default musicSlice.reducer;
