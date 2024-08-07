//import { useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { SongsModel } from "./assets/songs";
import allSongs from "./assets/songs";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { editSong, deleteSong, addSong } from "./musicSlice";
import { useState } from "react";

interface DisplaySongsProps {
  songList: SongsModel[];
}
const ContainerDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
 background-image: url(https://adminlte.io/wp-content/uploads/2021/04/hero-bg.jpg);
}
`;
const RightSection = styled.div`
  flex: 50%;
  background-color: #050826;
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
  background-color: #050826;
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
  background-color: #050826;
  margin-bottom: 10px;
  height: 150px;
  cursor: pointer;
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
  cursor: pointer;
`;
const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const MusicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const songId = parseInt(id ?? "0", 10);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = (id: number) => {
    // Navigate to a new page
    navigate(`/songs/detail/edit/${id}`);
  };
  const handleUrlChange = (id: number) => {
    const newUrl = `/songs/detail/${id}`;

    // Change the URL without triggering a full page reload
    window.history.pushState({}, "", newUrl);

    // // Optionally, you can manually update the browser location
    // window.location.href = newUrl;
  };
  const song_List: SongsModel[] = useSelector(
    (state: RootState) => state.music.allSongs
  );
  const currentSong: SongsModel =
    song_List.find((song) => song.id === songId) ?? song_List[0];
  //const index: number = song_List.indexOf(currentSong);
  const albumList: SongsModel[] = song_List.filter(
    (song) => song.album === currentSong?.album
  );
  const index = albumList.indexOf(currentSong);
  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(index);
  const handleSongClick = (index: number) => {
    setSelectedSongIndex(index);
  };

  return (
    <ContainerDiv>
      <LeftSection>
        {" "}
        {selectedSongIndex !== null ? (
          <div>
            <Container key={albumList[selectedSongIndex]?.id}>
              <SongCard>
                <SongImage
                  src={albumList[selectedSongIndex]?.image}
                  alt="Song Cover"
                />
                <SongDetails>
                  <Title>{albumList[selectedSongIndex]?.title}</Title>
                  <Artist>{albumList[selectedSongIndex]?.artist}</Artist>
                  <Album>{albumList[selectedSongIndex]?.album}</Album>
                  <Album>
                    {"Gener -" + albumList[selectedSongIndex]?.genre}
                  </Album>
                  <Album>
                    {"Release Year -" +
                      albumList[selectedSongIndex]?.releaseYear}
                  </Album>
                  <Album>
                    {"Duration -" + albumList[selectedSongIndex]?.duration}
                  </Album>
                  <ButtonContainer>
                    <EditButton
                      onClick={() =>
                        handleButtonClick(albumList[selectedSongIndex]?.id)
                      }
                    >
                      Edit
                    </EditButton>
                    <DeleteButton
                      onClick={() => dispatch(deleteSong(currentSong))}
                      //onClick={() => dispatch(editSong)}
                    >
                      Delete
                    </DeleteButton>
                  </ButtonContainer>
                </SongDetails>
              </SongCard>
            </Container>
          </div>
        ) : (
          <p>Select a song to display details</p>
        )}
      </LeftSection>
      <RightSection>
        {albumList.map((song, index) => (
          <AlbumList
            key={index}
            onClick={() => {
              handleSongClick(index);

              handleUrlChange(song.id);
            }}
          >
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
