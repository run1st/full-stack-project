//import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SongsModel } from "./assets/songs";
import allSongs from "./assets/songs";
import styled from "@emotion/styled";

interface DisplaySongsProps {
  songList: SongsModel[];
}
const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f4f4f4;
`;
const RightSection = styled.div`
  flex: 50%;
  background-color: #f4f4f4;
  height: 550px;
  overflow-y: scroll;
  margin-top: 80px;
`;
const LeftSection = styled.div`
  flex: 50%;
  background-color: #f1f1f1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const SongCard = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SongImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: center;
`;

const SongDetails = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Artist = styled.p`
  color: #555;
  margin: 5px 0;
`;

const Album = styled.p`
  color: #555;
  margin: 5px 0;
`;
const AlbumList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50vw;
  background-color: #f4f4f4;
  margin-bottom: 10px;
  height: 150px;
`;
const SongListCard = styled.div`
  width: 700px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 150px;
  display: flex;
`;
const SongListImage = styled.img`
  width: 80%;
  max-height: 200px;
  max-width: 200px;
  object-fit: cover;
  object-position: center;
`;

const SongListDetails = styled.div`
  padding: 20px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const EditButton = styled.button`
  background-color: blue;
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;
const MusicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const songId = parseInt(id ?? "0", 10);

  const song_List: SongsModel[] = allSongs;
  const currentSong: SongsModel | undefined = song_List.find(
    (song) => song.id === songId
  );
  const albumList: SongsModel[] | undefined = allSongs.filter(
    (song) => song.album === currentSong?.album
  );

  if (currentSong) {
    console.log(currentSong.title);
    console.log(albumList);
  } else {
    console.log("Song not found");
  }
  {
    currentSong ? (
      <div>
        <p>{currentSong.title}</p>
      </div>
    ) : (
      <p>Song data not found</p>
    );
  }
  return (
    <ContainerDiv>
      <LeftSection>
        {" "}
        {currentSong ? (
          <div>
            <Container>
              <SongCard>
                <SongImage src={currentSong.image} alt="Song Cover" />
                <SongDetails>
                  <Title>{currentSong.title}</Title>
                  <Artist>{currentSong.artist}</Artist>
                  <Album>{currentSong.album}</Album>
                  <Album>{"Gener -" + currentSong.genre}</Album>
                  <Album>{"Release Year -" + currentSong.releaseYear}</Album>
                  <Album>{"Duration -" + currentSong.duration}</Album>
                  <ButtonContainer>
                    <EditButton>Edit</EditButton>
                    <DeleteButton>Delete</DeleteButton>
                  </ButtonContainer>
                </SongDetails>
              </SongCard>
            </Container>
          </div>
        ) : (
          <p>Song data not found</p>
        )}
      </LeftSection>
      <RightSection>
        {albumList.map((song: SongsModel) => (
          <AlbumList>
            <SongListCard>
              <SongListImage src={song.image} alt="Song Cover"></SongListImage>
              <SongListDetails>{song.title}</SongListDetails>
            </SongListCard>
          </AlbumList>
        ))}
      </RightSection>
    </ContainerDiv>
  );
};
export default MusicDetail;
