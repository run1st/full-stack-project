import styled from "@emotion/styled";
import { SongsModel } from "./assets/songs";
import { Link } from "react-router-dom";
//import { LocationDescriptorObject } from "history";

// type ToObject = LocationDescriptorObject<{
//   songData: SongsModel;
//   song_List: SongsModel[];
// }>;

interface DisplaySongsProps {
  songList: SongsModel[];
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px;
  background-color: #050826;
`;
const SongCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  cursor: pointer;

  width: 700px;

  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 150px;
  display: flex;
  width: 300px;
`;
//background-image: url(${(props) => props.imageUrl});
const SongImage = styled.img`
  width: 200px;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
`;

const DisplaySongs: React.FC<DisplaySongsProps> = ({ songList }) => (
  <div>
    <GridContainer>
      {" "}
      {songList.map((song: SongsModel) => (
        <SongCard>
          <Link
            to={{
              pathname: `/songs/detail/${song.id}`,
              // state: { songData: song },
            }}
          >
            {" "}
            <SongImage src={song.image} alt="Song Cover"></SongImage>
          </Link>

          <Link
            to={{
              pathname: `/songs/detail/${song.id}`,
              // state: { songData: song },
            }}
          >
            {" "}
            <h3 style={{ color: "white" }}>{song.title}</h3>
            <p style={{ color: "white" }}>{song.artist}</p>{" "}
          </Link>
        </SongCard>
      ))}
    </GridContainer>
  </div>
);
export default DisplaySongs;
