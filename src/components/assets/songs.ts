export interface SongsModel {
  id: number;
  title: string;
  artist: string;
  //image: string; // Assuming p1_img and p2_img are of string type
  album: string;
  genre: string;
  releaseYear: number;
  duration: number;
}
const allSongs: SongsModel[] = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    genre: "Rock",
    releaseYear: 1975,
    duration: 5.55,
  },
  {
    id: 2,
    title: "Imagine",
    artist: "John Lennon",
    album: "Imagine",
    genre: "Pop",
    releaseYear: 1971,
    duration: 3.03,
  },
  {
    id: 3,
    title: "Like a Rolling Stone",
    artist: "Bob Dylan",
    album: "Highway 61 Revisited",
    genre: "Rock",
    releaseYear: 1965,
    duration: 6.13,
  },
  {
    id: 4,
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    genre: "Pop",
    releaseYear: 1983,
    duration: 4.54,
  },
  {
    id: 5,
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    genre: "Rock",
    releaseYear: 1976,
    duration: 6.3,
  },
  {
    id: 6,
    title: "Hey Jude",
    artist: "The Beatles",
    album: "The Beatles (White Album)",
    genre: "Rock",
    releaseYear: 1968,
    duration: 7.11,
  },
  {
    id: 7,
    title: "Purple Haze",
    artist: "Jimi Hendrix",
    album: "Are You Experienced",
    genre: "Rock",
    releaseYear: 1967,
    duration: 2.5,
  },
  {
    id: 8,
    title: "Superstition",
    artist: "Stevie Wonder",
    album: "Talking Book",
    genre: "Soul",
    releaseYear: 1972,
    duration: 4.26,
  },
  {
    id: 9,
    title: "Boogie Wonderland",
    artist: "Earth, Wind & Fire",
    album: "I Am",
    genre: "Disco",
    releaseYear: 1979,
    duration: 4.48,
  },
  {
    id: 10,
    title: "Wonderwall",
    artist: "Oasis",
    album: "What's the Story Morning Glory?",
    genre: "Rock",
    releaseYear: 1995,
    duration: 4.18,
  },
];
export default allSongs;
