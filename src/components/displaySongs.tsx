import styled from "@emotion/styled";
import { SongsModel } from "./assets/songs";
interface DisplaySongsProps {
  songList: SongsModel[];
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const SongCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;
const DisplaySongs: React.FC<DisplaySongsProps> = ({ songList }) => (
  <div>
    <GridContainer>
      {songList.map((song: SongsModel) => (
        <SongCard key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <p>{song.duration}</p>
        </SongCard>
      ))}
    </GridContainer>
  </div>
);
export default DisplaySongs;
