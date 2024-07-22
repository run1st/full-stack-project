import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import allSongs, { SongsModel } from "./assets/songs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { editSong } from "./musicSlice";
interface ImageProps {
  imageUrl: string;
}
//imageUrl={songToBeEdited.image}
// const BackDiv = styled.div<ImageProps>`
//   background-image: ${(props) => `url(${props.imageUrl})`};
// `;
const ContainerDiv = styled.div`
  padding-bottom: 20px;
  background-color: #050826;
  height: 650px;
`;
const EditSongWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  max-height: 600px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-waight: bold;
  text-align: center;
`;
const SaveEdit = styled.button`
  background-color: #4caf50;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;
`;
const CancelEdit = styled.button`
  background-color: #4caf50;
  padding: 10px 25px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  margin-left: 65px;
`;
const FormGroup = styled.div`
  margin-bottom: 15px;
`;
const Label = styled.div`
  margin-left: 25px;
  font-size: 15px;
  margin-bottom: 10px;
  display: block;
`;
const Input = styled.input`
  margin-left: 25px;
  width: 80%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;

  color: #ccc;
  &:focus {
    border: 3px solid blue;
  }
`;
const EditSong: React.FC = () => {
  const all_Songs = useSelector((state: RootState) => state.music.allSongs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const songId = parseInt(id ?? "", 10);
  const songToBeEdited =
    allSongs.find((song) => song.id === songId) ?? allSongs[0];
  const [editedSong, setEditedSong] = useState<SongsModel>(songToBeEdited);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSong((previous) => ({ ...previous, [name]: value }));
  };
  const handleUpdateAndGoBack = () => {
    dispatch(editSong(editedSong));
    console.log(editedSong.duration);
    console.log(all_Songs);
    // Navigate back
    navigate(-1);
  };

  return (
    <>
      <ContainerDiv>
        <EditSongWrapper>
          <Title>Some thing to change</Title>
          <FormGroup>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              defaultValue={songToBeEdited?.title}
              // value={songToBeEdited?.title}
              onChange={handleInputChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Artist Name</Label>
            <Input
              type="text"
              name="artist"
              defaultValue={songToBeEdited?.artist}
              // value={songToBeEdited?.artist}
              onChange={handleInputChange}
            ></Input>{" "}
          </FormGroup>
          <FormGroup>
            <Label>Album Name</Label>
            <Input
              type="text"
              name="album"
              defaultValue={songToBeEdited?.album}
              onChange={handleInputChange}
            ></Input>{" "}
          </FormGroup>
          <FormGroup>
            <Label>Gener</Label>
            <Input
              type="text"
              name="genre"
              defaultValue={songToBeEdited?.genre}
              onChange={handleInputChange}
            ></Input>{" "}
          </FormGroup>
          <FormGroup>
            <Label>Release Year</Label>
            <Input
              placeholder=""
              type="text"
              name="releaseYear"
              //  defaultValue={songToBeEdited?.releaseYear}
              onChange={handleInputChange}
            ></Input>{" "}
          </FormGroup>
          <FormGroup>
            <Label>duration</Label>
            <Input
              type="text"
              name="duration"
              defaultValue={songToBeEdited?.duration}
              onChange={handleInputChange}
            ></Input>{" "}
          </FormGroup>
          <SaveEdit onClick={handleUpdateAndGoBack}>Save</SaveEdit>
          <CancelEdit>Cancel</CancelEdit>
        </EditSongWrapper>
      </ContainerDiv>
    </>
  );
};
export default EditSong;
